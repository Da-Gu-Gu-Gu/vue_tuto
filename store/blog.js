export const state=()=>(
  {
    posts:[
          {
            title:"title1",
            blogPost:"Whitsunday Island, Whitsunday Islands",
            welcomeScreen:"/",
            image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          },
          {
            title:"title2",
            blogPost:"Whitsunday Island, Whitsunday Islands",
            welcomeScreen:"/",
            image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          },
          {
            title:"title3",
            blogPost:"Whitsunday Island, Whitsunday Islands",
            welcomeScreen:"/",
            image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          },
          {
            title:"title4",
            blogPost:"Whitsunday Island, Whitsunday Islands",
            welcomeScreen:"/",
            image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          },

    ]
  }
)

export const mutations={
  setPosts(state,payload){
    state.posts=payload
  },
  addPosts(state,payload){
    state.posts.push(payload)
  },
  removePosts(state,payload){
    state.posts=state.posts.filter(x=>x.id!==payload)
  }
}

export const actions={

}
