if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4b97b2a570ba41d1a1d9023c084eda4c","url":"2df8de709567e293b27c.worker.js"},{"revision":"626ada1a209941775ffa11329f3b4489","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"626ada1a209941775ffa11329f3b4489","url":"index.html"},{"revision":"72d9b80a20722481ad220660f5d0260d","url":"static/css/22.c8f27161.chunk.css"},{"revision":"e6de5a082cc39e708a811bf56cfdc3a2","url":"static/js/0.f975bc25.chunk.js"},{"revision":"c415f0cb8a22a0f3d57e4ad7ff48f6d9","url":"static/js/1.08e02924.chunk.js"},{"revision":"d36dbe73ce42b2a4c1017b5151b84ff8","url":"static/js/10.9ba183cb.chunk.js"},{"revision":"4df89d532bf71910fd5b42eb947a1583","url":"static/js/11.44410913.chunk.js"},{"revision":"9807797f60422ac604164b69623f647b","url":"static/js/14.c4624bc0.chunk.js"},{"revision":"d8b97327adadace2c1557c503b9e4860","url":"static/js/15.0e469200.chunk.js"},{"revision":"0e01963355007c75dffa216d12f54fe7","url":"static/js/16.b52c8e90.chunk.js"},{"revision":"c985b25e5fb98e6a9c80df1cf8c920ee","url":"static/js/17.c3f74389.chunk.js"},{"revision":"b7084d94a465f028a43aa1769f4df24b","url":"static/js/18.f9668a07.chunk.js"},{"revision":"400c2bc19161942d879e07496d520e4f","url":"static/js/19.2533362e.chunk.js"},{"revision":"75f0b18f2ad67fe683e3fb5691c3d545","url":"static/js/2.39f723d2.chunk.js"},{"revision":"ce16fff3fcb22eac73f1e4be47265e0b","url":"static/js/20.485b7580.chunk.js"},{"revision":"6233678fb89690ae0daad803bac6d5e0","url":"static/js/21.13be0bb6.chunk.js"},{"revision":"431a3d0b94ff9938f75e72a1df49ff6a","url":"static/js/22.8fc14ef7.chunk.js"},{"revision":"89aa97ab579c60e74eefa1295506423f","url":"static/js/23.dfa192db.chunk.js"},{"revision":"101353813c1402f4de7c407b624b9022","url":"static/js/24.1ac48085.chunk.js"},{"revision":"f30f6946b44d346c443b9986513aee57","url":"static/js/25.8ac55256.chunk.js"},{"revision":"2f5e11ffc0fd0819da5bd04ac43f382d","url":"static/js/26.d58b1214.chunk.js"},{"revision":"72224e3e74cfd794be2a5fb59f83e501","url":"static/js/27.62be3f50.chunk.js"},{"revision":"98211d766f90173fd5da695118b042a8","url":"static/js/28.dceb66b6.chunk.js"},{"revision":"0ae301bd52102ab08a8e50a9b115dbfe","url":"static/js/29.f5d1161c.chunk.js"},{"revision":"5c909b13fabf261c07c9617096f5261a","url":"static/js/3.e2da794f.chunk.js"},{"revision":"dc324f4e7d148998a8dcf174f6eeeabe","url":"static/js/30.1ae597ac.chunk.js"},{"revision":"5b1fec40a13183683f08a3c6bd81f661","url":"static/js/31.a29e5a6b.chunk.js"},{"revision":"087c5a3a5c093049beeaf38381d11222","url":"static/js/32.d130c084.chunk.js"},{"revision":"10dd03ecb117f49cf3214af300ab1a57","url":"static/js/33.6373f7cb.chunk.js"},{"revision":"bc68bdae7c05169bdce9ae8aba87a190","url":"static/js/34.31499b17.chunk.js"},{"revision":"9afaa1e9a717bfd465494bb88e486cc0","url":"static/js/35.0b4aa274.chunk.js"},{"revision":"99df44cc804ed9c4dcf1ed67d2e432b1","url":"static/js/36.d52b4760.chunk.js"},{"revision":"b1507113a82d5bff13cfae20db26fd80","url":"static/js/37.6a9923ed.chunk.js"},{"revision":"2eb3413ebed63e7f772b8f208d9f9a91","url":"static/js/38.6a625793.chunk.js"},{"revision":"c85d0766c86729c2da540884a294a02f","url":"static/js/39.fcec2e0d.chunk.js"},{"revision":"925cf94aa998f61afca9eb3cb2e98b60","url":"static/js/4.ad8dd9a8.chunk.js"},{"revision":"45d251b2a4d611fa6077d456fb3fa5b8","url":"static/js/40.456720b7.chunk.js"},{"revision":"0a4429817d19a9f076c580cf4b0ba0c0","url":"static/js/41.cf098f83.chunk.js"},{"revision":"35c1b37040ee8ab2509e7b212e6ce501","url":"static/js/42.197a8744.chunk.js"},{"revision":"2e74b6e11c1619b727753594570ad3c7","url":"static/js/5.b45eb95d.chunk.js"},{"revision":"e981971d8d8350a0601ce41b297f0441","url":"static/js/6.ea2c60bb.chunk.js"},{"revision":"4a87f3d19f522f02b7ff0af58cf8980b","url":"static/js/7.a6ea649e.chunk.js"},{"revision":"25dba61e8bc0c19fa3b1ce007acee306","url":"static/js/8.8877807f.chunk.js"},{"revision":"7d771809ee7a3145f22131659710b260","url":"static/js/9.36d5164b.chunk.js"},{"revision":"775925135d2bbace2cd19d76c539afb0","url":"static/js/main.efb4428a.chunk.js"},{"revision":"7be3b5bfa2d6e34ffa59819b09cca146","url":"static/js/runtime-main.e3b17485.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
