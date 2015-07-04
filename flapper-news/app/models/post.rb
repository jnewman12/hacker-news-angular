class Post < ActiveRecord::Base
	has_many :comments

	# this is taking the place of using the rabl gem. Rabl makes all of your model data json
	# which allows you to get all of your backend DB data as json and do stuff with it.
	# this is good for angular. We take rails json data, and manipulate it on the front end with angular.
	def as_json(options = {})
		super(options.merge(include: :comments))
	end
end
