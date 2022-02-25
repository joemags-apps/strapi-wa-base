//app/wa-hook-zw
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/wa-hook-zw',
    handler: 'WaController.app',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/tg-hook-zw',
    handler: 'TgController.app',
    config: {
      policies: [],
      auth: false
    },
  },
];
