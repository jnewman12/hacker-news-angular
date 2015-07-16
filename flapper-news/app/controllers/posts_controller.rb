class PostsController < ApplicationController

	def index #works
	 render json: @post = Post.all.to_json
	end

	def create #works
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
	
	def show
		render json: @post = Post.find(params[:id]).to_json
	end

	def upvote
		upvote_post
	end

	private
	def post_params
		params.require(:post).permit(:link, :title)
	end

	def upvote_post
		@post = Post.find(params[:id])
		@post.upvotes += 1
		@post.save
		render json: @post.to_json
	end
end

# class QuestionsController < ApplicationController
#   before_action :set_question, only: [:show, :update, :destroy]
#   #before_action :allow_cross_domain

#   # GET /questions
#   # GET /questions.json
#   def index
#     @questions = Question.all

#     render json: @questions
#   end

#   # GET /questions/1
#   # GET /questions/1.json
#   def show
#     render json: @question
#   end

#   def new
#     @question = Question.new
#     render json: @question
#   end

#   # POST /questions
#   # POST /questions.json
#   def create
#     @question = Question.new(question_params)

#     if @question.save
#       render json: @question, status: :created, location: @question
#     else
#       render json: @question.errors, status: :unprocessable_entity
#     end
#   end

#   def edit

#   end

#   # PATCH/PUT /questions/1
#   # PATCH/PUT /questions/1.json
#   def update
#     @question = Question.find(params[:id])

#     if @question.update(question_params)
#       head :no_content
#     else
#       render json: @question.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /questions/1
#   # DELETE /questions/1.json
#   def destroy
#     @question.destroy

#     head :no_content
#   end

#   def upvote
#     upvote_question # this method might be done in angular instead of rails, not sure....
#   end

#   def downvote
# 	downvote_question
#   end
#   private

#     def set_question
#       @question = Question.find(params[:id])
#     end

#     def question_params
#       params.require(:question).permit(:title, :content)
#     end

#     def upvote_question
#      q = Question.find(params[:id])
#      q.vote_count += 1
#      q.save
#     end

#     def downvote_question
# 	 q = Question.find(params[:id])
# 	 q.vote_count -= 1
# 	 q.save	
#     end

#     # def allow_cross_domain
#     #   headers['Access-Control-Allow-Origin'] = '*'
#     #   headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
#     #   headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
#     # end
# end