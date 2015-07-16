class CommentsController < ApplicationController
	def create #works	
     @comment = Comment.new(comment_params)
      puts "hi!!!!"
      p params[:post_id]
      @comment.post_id = params[:post_id].to_i
	     if @comment.save
	      render json: @comment
	     else
	      render json: @comment.errors, status: :unprocessable_entity
	     end
    end

 #    def update #or edit
	#     @answer = Answer.find(params[:id])

	#     if @answer.update(answer_params)
	#       head :no_content
	#     else
	#       render json: @answer.errors, status: :unprocessable_entity
	#     end
	# end

	def upvote
	 upvote_comment
	end

	private
	def comment_params
		params.require(:comment).permit(:body, :post_id)
	end

	def upvote_comment
      @comment = Comment.find(params[:id])
      @comment.upvotes += 1
      @comment.save
      render json: @comment.to_json
    end
end