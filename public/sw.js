var CACHE = 'cache-and-update';

self.addEventListener('install', function(evt) {
    console.log('The service worker is being installed.');
    evt.waitUntil(precache());
});

self.addEventListener('fetch', function(evt) {
    console.log('The service worker is serving the asset.');
    evt.respondWith(fromCache(evt.request));
    evt.waitUntil(update(evt.request));
});
function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      'https://s3.us-east-2.amazonaws.com/ritu-static-files/ar/FruitCarving.png',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ce/Anthropometrist.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ce/Decafio-Concreto.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ce/Encueasta.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/cse/404.png',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/cse/CodeWars.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/cse/Googlr.jpeg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/cse/Rapid_Miner.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/cse/TheVinciCode.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ece/Electrocution.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ece/ICWar.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ece/LabHunt.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ece/LineFollower.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ece/Quarantine.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/ece/SellMeTheCircuit.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/eee/CADMaster.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/eee/Ideator.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/eee/MaD.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/eee/Maestro.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/eee/MazeRunner.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/AeroShow.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/AquaStrike.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/Colosseum.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/CountyCricketLeague.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/Exodus.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/Nritya.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/OPTIMUS-1-min.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/RotoDrag.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/StarOfRitu.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/Talaash.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/VoiceOfRitu.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/adaar.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/vidya.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/gen/water.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/mca/BootMe.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/mca/Dbase.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/mca/DesignPro.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/mca/FixMeBuddy.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/mca/RushHour.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/me/Engine_Assembly.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/me/GunsNRoses.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/me/Junk_Master.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/me/Machinist.jpg',
          'https://s3.us-east-2.amazonaws.com/ritu-static-files/me/Numera_Uno.jpg',
    ]);
  });
}

function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
      return cache.match(request).then(function (matching) {
        return matching || Promise.reject('no-match');
      });
    });
}
function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
