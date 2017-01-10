# Angular2Rails

This project is a base integration of `Angular 2 / Angular-CLI` and `Ruby on Rails`

## Prerequisities

   * nvm `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
   * node 6+  `nvm install 6.9.4`
   * bundler `gem install bundle`
   * angular-cli `npm install -g angular-cli` 
   
# Running locally
   
1. Install all node package dependencies
   
        npm install

2. Install all rails gems 
        
        bundle install

3. In development mode run foreman which will run webpack-dev-server simultaneously with rails server
        
        foreman start
        
4. For production compile assets on deploy
        
        npm run build:production
        
5. Project is not configured for frontend unit tests         