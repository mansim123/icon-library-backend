module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
          // Explicitly setting ACL to null
          ACL: null,
        },
        // Add the baseUrl configuration
        baseUrl: `https://${env('AWS_BUCKET_NAME')}.s3.${env('AWS_REGION')}.amazonaws.com`,
      },
      actionOptions: {
        upload: {
          // Explicitly setting ACL to null
          ACL: null,
        },
        uploadStream: {
          // Explicitly setting ACL to null
          ACL: null,
        },
        delete: {}, // Add this line to configure the delete action
      },
    },
  },
  // ...
});
