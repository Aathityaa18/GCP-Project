const Compute = require('@google-cloud/compute');

const projectId = 'sampleproject2-381206';
const region = 'asia-south1-a';
const serviceAccountKeyPath = './keyfile_service1.json';
const sshPublicKey = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCwlbbZKbWJI7cIGeICv4RDb8cT5DW9TzkKvWZWx132ZteSDNEFWuaI/ZC1XWyQIupkxisfewgiKaxge5ot91aQa77JtIyL7xD6ikMzctfG/a13tz19KFFA9sP8iD8LmcG7DcmsvQIEvElO0fgUc12AoTO5O3ZNa3Wzb/wnLoY8bAS8mpS/ZB6WEeOykJE0PHqEqUWWOPsLqJGHtx8Mc2qpwyoXxjRChpLDU9PtssLbGVgCNvsh7tSAbmNJuGUVAu22Fk6xwF0+q1ed3g2L9R66kecaN215Tti/kYDOymvCxli/lenm71I0orbrY+ZoWIiAanJK6EVBaopCnJ5rPToJYqowNX2fFUlPo3HHYqT+l3UZ0m0eM19qFfziGQLRoIdSGB+VU5PQBSNa/b7WhYGnVuyShPLOd6SQ2GRWKBzdPK/c+NkXzf6rtgKEzH+DBMv2BBmdZRc//vOLH41lgqjSij39XH9xTkQldbNv5uk9wfgYQ6X4rIrWEPh4GmXGAC0IE6BUKDA8O1X9Kf5FCZPsWT68cuEv3rPFTiNoSqZw0SJVbZgWCz1srTbmWHpAt2XPWRaaN9YKIwL/jAz5eBRfn8rfQc5W5G9HPAXJ4zM9TXqfGlqFa10mcR5awkTxIZ6qUkgducP6tMXgYH+HgH71wakrNZz0+mzam6AtQH8kTw';
const iamRole = 'roles/editor';
const username = 'user1';

const compute = new Compute({
  projectId: projectId,
  keyFilename: serviceAccountKeyPath
});

const metadata = {
  'ssh-keys': `user:${sshPublicKey}`
};

// Create metadata for the new user
compute
  .region(region)
  .setMetadata(metadata)
  .then(() => {
    console.log(`Metadata updated with SSH key: ${sshPublicKey}`);
  })
  .catch((err) => {
    console.error('Error updating metadata:', err);
  });

// Add IAM role to the new user
compute
  .region(region)
  .addUserIamMember(username, iamRole)
  .then(() => {
    console.log(`User ${username} granted IAM role ${iamRole}`);
  })
  .catch((err) => {
    console.error(`Error adding IAM role ${iamRole} to user ${username}:`, err);
  });

// Create the new user account
compute
  .region(region)
  .addUser(username)
  .then(() => {
    console.log(`User ${username} created successfully`);
  })
  .catch((err) => {
    console.error('Error creating user:', err);
  });




