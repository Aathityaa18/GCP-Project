const { GoogleAuth } = require('google-auth-library');

async function getAccessToken() {
  // Create a new GoogleAuth object
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  });

  // Obtain a client token with appropriate scope
  const client = await auth.getClient();

  // Retrieve the access token
  const token = (await client.getAccessToken()).token;

  // Return the access token
  return token;
}

// Call the function to obtain the access token
getAccessToken().then(token => {
  console.log(`Access token: ${token}`);
}).catch(err => {
  console.error(`Error obtaining access token: ${err}`);
});
