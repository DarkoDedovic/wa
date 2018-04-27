import { Comment } from "../entities/Comment"

class CommentService {
    getCommentData(postId) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${postId}`, {
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "3ed714de-ca90-4450-bebd-b76a901d2685"
            }

        }).then(response => response.json())
            .then(response => {
                return response.map(comment => {
                    return new Comment(comment)

                })


            })


    }
    postCommentData(data) {
        return fetch('http://bitbookapi.azurewebsites.net/api/Comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Key": "337335F",
                "SessionId": "3ed714de-ca90-4450-bebd-b76a901d2685"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())

    }
}
export const commentService = new CommentService()