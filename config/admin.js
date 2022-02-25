module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bbc1f541a26a120385c370aa8ac554c3'),
  },
});
