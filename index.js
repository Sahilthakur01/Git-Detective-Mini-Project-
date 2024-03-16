const searchButton = document.querySelector(".search-button")
const APIData = "https://api.github.com/users/"
const searchname =    document.querySelector('.search-bar')
const warning = document.querySelector('#warning')
const profile_pic = document.querySelector('.profile-picture')
const profilename = document.querySelector('#name')
const follower = document.querySelector('#follower')
const repo = document.querySelector('#repo')
const userlocation = document.querySelector('#location')
const following = document.querySelector('#following')
const twitter = document.querySelector('#twitter')
const bio = document.querySelector('#bio')


searchButton.addEventListener('click', SearchGithub)


function SearchGithub(){
    // if(searchname === "" && searchname ===  null){
    //         warning.innerHTML = "Please Enter a Valid Name"
    // }
        const t = searchname.value
        const APIData1 = `${APIData}${t}`
        var xhr = new XMLHttpRequest()
        xhr.open('GET', APIData1)
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                const data = JSON.parse(this.responseText)
                console.log(data.bio)

                profile_pic.src = data.avatar_url
                
                profilename.innerHTML = `GIT : ${data.login}`
                follower.innerHTML = `Follower : ${data.followers}`
                repo.innerHTML =  `Public Repo : ${data.public_repos}`
                if(data.location === null){
                    userlocation.innerHTML = `Location : Not Availabel`
                }
                else{
                    userlocation.innerHTML = `Location : ${data.location}`
                }

                following.innerHTML = `Following : ${data.following}`

                if(data.twitter_username === null){
                    twitter.innerHTML = `Twitter : Not Availabel`
                }
                else{
                    twitter.innerHTML = `Twitter : ${data.twitter_username}`
                }

                bio.innerHTML = `Bio : ${data.bio}`

            }
            
        }
        xhr.send()
}
