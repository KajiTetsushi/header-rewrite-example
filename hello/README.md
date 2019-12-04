# hello

Sample to test Nginx rules in conjunction with [the main Nginx configuration](../nginx/header-rewrite-example.conf).

## System Requirements

- Nginx v1.x++
- Node v10.x++
- Yarn v1.x++
- PM2 v4.x++
- _(optional)_ Git v2.x++
  - used for cloning the repository.
  - will not be used if you choose to download the repository instead.

## Usage

1. Run the following: `pm2 start hello.js`.
2. Merge the configuration from `hello.conf` into the main configuration file.
