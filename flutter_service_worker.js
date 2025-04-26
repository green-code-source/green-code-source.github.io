'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8e7bd9742e1f54b1ca5c443ab0e74c96",
"favicon-16x16.png": "b3881364115cb29083456edaf7fb2d7b",
"favicon-32x32.png": "fc561f2925d9f4531840a0b3ea6f3992",
"main.dart.js": "583ca1ed85dfa01804c42996116ecd7a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/android-chrome-192x192.png": "d0d70fe3ac30500415b6c78fb0934f2c",
"icons/apple-touch-icon.png": "79d8164401d46ac4c8c3ee31b44fefaa",
"icons/android-chrome-512x512.png": "cd791c518dbfe4d57f4fa892a89aeeef",
".git/FETCH_HEAD": "ae1b244460b3577c547a5905b560dc35",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ff/fa0efaede7d8d66b7e403e1d2a3e60db46ccf4": "19d216db0a3936533d0ea03166a376d3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/ed/152e29cb0652fca98ef89077e8b2e7c81cc2e1": "2d73a7975394105dc9f0bca3c47e8745",
".git/objects/e3/d2b6f4bb4e59d293326b597d3a943b2001b7ab": "40da8b937f12f26f7ca8b4394fe2b2a5",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/9e/ccde686234654b371751462c7e373706eda0a2": "4aac39bce29a22f773d40d83903233f0",
".git/objects/25/0528bbd09362119964a8db0fdf5ffb11e9a037": "d55b3cce5424cc9171b158d6d50233e4",
".git/objects/6f/bf5aeaddc64a2f778498e6dc794fe0c2f6e834": "a4c4c978309dda13b4b87374b5591edb",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/82/6d91c958ea7e85768aa881c448169a13906e6b": "426f5c8d2a7e168285b103b5c2c1c0a1",
".git/objects/bc/1e6b9c4347c36d6e679e523428c6a102887090": "23af5b76680fe904e40a009f4eaba545",
".git/objects/7b/541c6280b8f486eae91b9aca41ecad117e9070": "30759e395d41172d80e8d85c5fad23f6",
".git/objects/3c/9be4943ad28e0d420a46d8d426c095c2bea0d1": "2f288221dfc4beeb4cb77f3f396c2224",
".git/objects/21/03d08b867a12b26e16c18de2ccac3140e884d7": "796f1dd1a2d82421850222789bc29051",
".git/objects/59/e9d263cdb024654a651744d492119a5014d1a2": "9ed0ae8327b3de296c9117e89fd11836",
".git/objects/90/9f8fa810d4d4c6924635efb8093fc4abeb3161": "2be44180f7f2abd105631a9552944102",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/b1/bf091a812efc4886b9791d10785f586d7984d6": "6bbf6fc987cccdcd6526bc5c6ec16eaa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/18/f9044ed460000247a8fd66be99f639ec2f5277": "d6fca30cd2cc7ce4d1d08566e4bb421b",
".git/objects/74/e51902adc6fccfe34646b8bec31a0ac2aac139": "2be0d6dd230b2a056fd0df0d8398978d",
".git/objects/74/4a15355ffcf006a6291e8f189e3757072be27b": "4dc87711c871e4a729482a2cf53c837d",
".git/objects/8e/75ced45de85cdd97e09016eb47270bd442c55d": "600ef53f8d8ac340aa679c9d18554557",
".git/objects/8e/fd73c6afe817c243d8e9b427514915c4c9c140": "49c15faa9057f14abba600bd674b6881",
".git/objects/6e/6791f712ee260c0497adde314070f7961b69de": "f366ee53119484706a2d6adcfec0e711",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/b8/680900285cba87a8753c31f4f7e8a535c885a4": "0a9f87fd5cee70c431bcc5e8c9d8dba6",
".git/objects/e5/2f7a0d290c9e3e2571e965b6a323502be18bd1": "237d371667ecd60843bd2825e6d9b5ed",
".git/objects/11/bd048267360ef54870895ae434c883bdb87a86": "2e9e337ba313a9629cdf0571c64261f7",
".git/objects/19/6756718ba557ea6187beb704f1fa4c257f76c7": "a3470a21b8e232ebbbf6d966a9f54bce",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ec1260af0671813343ff1cc7cdba4ac23756c2": "aec97e2abaab490de00966c2bae6811f",
".git/objects/50/b6b2806c19fbcae9630d7a594a3a039ce2915b": "c00f35bcecbf13a7535cc3fa90365ced",
".git/objects/50/b4fbfe204212b7e8ee5012ccd9d32e9e6b18c0": "5956062e3b9381e1c881882130661a16",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/8b/9128007deebd41d74d6bde22b3d3415074d9b5": "11a0788458821b3ab30efca2b1dceede",
".git/objects/8b/21277592c93685aacc0ac0dfc68fbca86fc209": "e7db2043f49d40b33eadd748d13c52f6",
".git/objects/38/ba5edb9ef5330a768cc083b993d829200f4aae": "92e4f21b92f4b9e97370408aebbc70e9",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/bf/321bbac36bac6ad6ae5bba53f572bb87566b11": "963f2026155338e38255c1b0024a7cc3",
".git/objects/20/9c8c167a18754cd89181040549dfee0340f39a": "86927fda51bd5d4e96a812a4402bd850",
".git/objects/92/53605f8ca67bab928172490fedf7bb98270358": "73462f5674f7f38ebfde43c2d4cdd820",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/e0/c7d34dd4ed52cfea146bd33a024dc6da444d22": "32e0c925eeebff95d3c4409838ce7a8d",
".git/objects/e0/167fb8a405b8692ed833928710e41383f4816e": "4c30a273fb7d10b4f5e3b956eb0c3cb5",
".git/objects/e0/8a5c8b95b9d007be54cf78b3b6fdf5631073a9": "bb9b3c799f6af080421d8ae681fc0ee1",
".git/objects/4c/7299465cef21b215a679161caab7108c30a814": "3d1ac25fb6ed86374cb982ef8a810d79",
".git/objects/4c/da61d7c0125cbbf89cebff4bc1ed5835b067a5": "42278125d61402392e5e91ceabbd244e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a3/714088b8dd0ff8569122e76b8cce35b0ec5a56": "694d679ac5295b84cfb3f87f8aba5ca0",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/94/b50a14554cd714dbbb1ca249459688900d3c47": "62725c4c1be59f3faea453a9f2330bde",
".git/objects/84/51ad618a910c9c1481c3fcf20aca48938afafc": "b870572f1701238e4454b6e9712eef4f",
".git/objects/52/faa3209cdfbea579cb88aa1a7300c0ea6a993d": "d336fc15503a0afc7e96c17bdfb8c30a",
".git/objects/52/3ccf44899bf7e113b6cc89fd88525986bfe688": "fbe45232a6417312b445d0daa0db95e2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/60/9310231f362c3873261ee0d8886aa70675ba93": "912656e9d0f74638ce7489e7f8d75d75",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/30/03e98bd745011360ebe366c340a92c68bc833d": "cf0e4de67b0d85ebb3810eb9b6cc935c",
".git/objects/4d/2c45e9ee241536c8ec2b9a81ff53bd0b4c83ea": "bef15234ce1c461feb10582fa624bc27",
".git/objects/66/a055564ab08e3fe162041b4d27085f83fe1a34": "fde3825aff60021aab0e55cc0916ed35",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/8f/59eb45ee2a2f4b7f02551df75b71370911532e": "73d39441b2ea6bd67ec969722aa7f3ee",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/1c/31e009fbf9dc16acaed143b67d5d642b104d95": "2a887285cdd183b4a1c63d389385185a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/63/827e4cdb20bdb8cebe42a8674ce4f4d734e5f8": "b72b72ccc891f31f69f391e0c8c35c24",
".git/objects/ee/728f8d5a0d27280629df02e01a7298155a5b43": "04ce25721770b4450f1ef2e8c2bb1bcc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/cf/f884fb89d4bd53b00aca831accaeece572974b": "5d0a4da7e0338919d05035c13ef6e21b",
".git/objects/46/e62b526d216dfb78b22ac40aa0fca76fec2e76": "59c28ef576547a37cf362ce5b711feae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/34/aa6b479154dfa660d48932b9d8d2ef2cbe1a0f": "3e9753d009a11f477a36442a4a7003e5",
".git/config": "c05075654c5df9a411f9b27367198b48",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "235afadc3708aa583f290f14182016eb",
".git/ORIG_HEAD": "0b99450cd10419df299e16783d781482",
".git/COMMIT_EDITMSG": "5f26826d56821573bd9775448295ce5c",
".git/logs/HEAD": "57a67575ed860de0ee3b676b04aa4605",
".git/logs/refs/remotes/origin/main": "5a27e88b56d0b836a9588667c9cb0ca0",
".git/logs/refs/heads/main": "a46c6d0f1950cb81bc6904d9e2536d85",
".git/refs/remotes/origin/main": "93ea4cad3eeb42ccdc6f1930fc1a4e8a",
".git/refs/heads/main": "93ea4cad3eeb42ccdc6f1930fc1a4e8a",
"flutter_bootstrap.js": "848d7782a87fc0f7f75456ced53ab564",
"favicon.ico": "973f3dc2e28a68b9a0ac9434fa2250c7",
"index.html": "796ec117e42f46d6876545ff30af8f29",
"/": "796ec117e42f46d6876545ff30af8f29",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"README.md": "62946d569471fcf4a65714688cd0a0b0",
"assets/fonts/MaterialIcons-Regular.otf": "946e3d389a0527fb4b4bd93f74f4f549",
"assets/fonts/LiberationSerif-BoldItalic.ttf": "e7a42c00ab241df4dd6b4da3c6d17fa4",
"assets/AssetManifest.bin": "ab8369fbf54e0e0e07f229efc1b49115",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "bee3a4658e80ed1d7b91ef1aa6e5c6be",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "7b6baa3c8b9e8eb4e6d54a80887b3c4e",
"assets/NOTICES": "c33daad3ec27a97db70b7451162a951e",
"assets/FontManifest.json": "f017032edf3b01341708e6430fd12185",
"manifest.json": "bb1231a3edb70cb120cedae294463729"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
