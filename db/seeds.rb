# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all 
Cocktail.destroy_all 
User.destroy_all 

@markelldehaney = User.create(username: 'markelldehaney',email: 'markelldehaney@gmail.com', password: 'kailey')  
@foxbar = User.create(username: 'foxbar',email: 'foxbar@gmail.com', password: 'chartreuse') 


puts "#{User.count} users created" 

markelldehaney = Cocktail.create(name: 'Old Cuban', variety: 'Shaken', ingredients: '1.5oz aged rum,.75oz lime,4 mint sprigs,.5oz Demerara ', build: 'Shake,Double strain > coupe,Top with prosecco,Mint leaf garnish', user: @markelldehaney) 
markelldehaney = Cocktail.create(name: 'Daiquiri', variety: 'Shaken', ingredients: '2oz Silver Rum .75oz lime .75oz simple syrup', build: 'Build in a shaker tin. Add ice and shake vigorously. Strain into a chilled coupe glass.', user: @markelldehaney) 

puts "#{Cocktail.count} cocktails created"

review = Review.create(comment: "classic", cocktail: markelldehaney, user: @foxbar )

puts "#{Review.count} reviews created"



