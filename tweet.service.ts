export class TweetService{
    getTweets(){
        return [
            {
                image: "http://lorempixel.com/100/100/people?1",
                name: "Windward",
                username: "@windwardstudio",
                tweet: "Looking for a better company reporting or docgen app?",
                liked: true,
                likes: "1"
            },{
                image: "http://lorempixel.com/100/100/people?2",
                name: "AngularJS News",
                username: "@angularjs_news",
                tweet: "Right Relevance: Influencers, Articles and Conversations",
                liked: true,
                likes: "5"
            },{
                image: "http://lorempixel.com/100/100/people?3",
                name: "UX & Bootstrap",
                username: "@3rdwave",
                tweet: "10 Reasons why web projects fail",
                liked: false,
                likes: "0"
            }
        ]
    }
}