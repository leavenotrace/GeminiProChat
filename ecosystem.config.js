module.exports = {
    apps: [{
      name: 'happygemini',
      script: 'pnpm',
      args: 'start',
      interpreter: 'none',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    }]
  };
  

  