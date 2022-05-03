module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        executive: {
          field: "Slug",
          references: "Name",
        },
        initiative: {
          field: "Slug",
          references: "Title",
        },
      },
    },
  },
});
