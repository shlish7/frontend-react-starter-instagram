import { storageService } from './async-storage.service'

const STORAGE_KEY = 'feeditem'

export const feeditemService = {
    getFeedItems,
    query,
    getById,
    save,
    remove,
    create,
}

window.cs = feeditemService

async function getFeedItems() {
    try {
        const results = await storageService.query(STORAGE_KEY)
        if (!results || !results.length) {
            return _createMockFeeditems()
        }
        return results
    } catch {
        console.log("faild mock users")
    }
    
    // return httpService.get(`user`)
}

async function query(filterBy = { txt: '' }) {
    try {
        const results = await storageService.query(STORAGE_KEY)
        //todo: do the filter here - before saveing to store filter post.userId is in connectedUser.followingIds
        return results
    } catch {
        console.log("faild query feed items")
    }
    
    // return httpService.get(STORAGE_KEY, filterBy)
}

async function getById(feeditemId) {
    try {
        const feeditem = await storageService.get(STORAGE_KEY, feeditemId)
        return feeditem
        // return httpService.get(`feeditem/${feeditemId}`)
    } catch {
        console.log("faild getById feed item")
    }
}

async function remove(feeditemId) {
    try {
        return storageService.remove(STORAGE_KEY, feeditemId)
        // return httpService.delete(`feeditem/${feeditemId}`)
    } catch {
        console.log("faild remove feed item")
    }
}

async function create(feeditem) {
    var savedFeeditem
   
    try {
        savedFeeditem = await storageService.post(STORAGE_KEY, feeditem)
        // savedFeeditem = await httpService.post(STORAGE_KEY, feeditem)
        console.log("or debug db savedFeeditem: ", savedFeeditem)
        return savedFeeditem
    } catch {
        console.log("faild save feed item")
    }
}

async function save(feeditem) {
    var savedFeeditem
   
    try {
        if (feeditem._id) {
            savedFeeditem = await storageService.put(STORAGE_KEY, feeditem)
            // savedFeeditem = await httpService.put(`feeditem/${feeditem._id}`, feeditem)
        } else {
            savedFeeditem = await storageService.post(STORAGE_KEY, feeditem)
            // savedFeeditem = await httpService.post(STORAGE_KEY, feeditem)
        }
        return savedFeeditem
    } catch {
        console.log("faild save feed item")
    }
}

async function _createMockFeeditems() {
    const mockUsers = [
        {
          fullname: "newTest",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727287997/orynyuzism6ogoclldks.png",
          password: "fhgj",
          username: "fhgjhk",
          _id: "mwut3",
        },
        {
          fullname: "hgvjh",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8.png",
          password: "hv",
          username: "hcgj",
          _id: "OWyfg",
        },
        {
          fullname: "testUser1",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8",
          password: "password1",
          username: "testuser1",
          _id: "uid001",
        },
        {
          fullname: "testUser2",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8.png",
          password: "password2",
          username: "testuser2",
          _id: "uid002",
        },
        {
          fullname: "mockUser3",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8",
          password: "mock123",
          username: "mockuser3",
          _id: "uid005",
        },
        {
          fullname: "mockUser4",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "mock456",
          username: "mockuser4",
          _id: "uid006",
        },
        {
          fullname: "randomUser5",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "randompass5",
          username: "randomuser5",
          _id: "uid007",
        },
        {
          fullname: "randomUser6",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "randompass6",
          username: "randomuser6",
          _id: "uid008",
        },
        {
          fullname: "user7",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass7",
          username: "user7",
          _id: "uid009",
        },
        {
          fullname: "user8",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass8",
          username: "user8",
          _id: "uid010",
        },
        {
          fullname: "testUser9",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass9",
          username: "testuser9",
          _id: "uid011",
        },
        {
          fullname: "user10",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass10",
          username: "user10",
          _id: "uid012",
        },
        {
          fullname: "randomUser11",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "random11",
          username: "randomuser11",
          _id: "uid013",
        },
        {
          fullname: "randomUser12",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "random12",
          username: "randomuser12",
          _id: "uid014",
        },
        {
          fullname: "mockUser13",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "mockpass13",
          username: "mockuser13",
          _id: "uid015",
        },
        {
          fullname: "testUser14",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass14",
          username: "testuser14",
          _id: "uid016",
        },
        {
          fullname: "user15",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass15",
          username: "user15",
          _id: "uid017",
        },
        {
          fullname: "mockUser16",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass16",
          username: "mockuser16",
          _id: "uid018",
        },
        {
          fullname: "testUser17",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass17",
          username: "testuser17",
          _id: "uid019",
        },
        {
          fullname: "mockUser18",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass18",
          username: "mockuser18",
          _id: "uid020",
        },
      ];

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const getRandomTags = () => {
        const tags = ['nature', 'tech', 'fashion', 'travel', 'food', 'art', 'music'];
        const randomTagCount = getRandomInt(1, 4); 
        return Array.from({ length: randomTagCount }, () => tags[getRandomInt(0, tags.length)]);
      };
      
    const getRandomComments = () => {
        const commentsCount = getRandomInt(1, 10); 
        return Array.from({ length: commentsCount }, () => {
            const randomUser = mockUsers[getRandomInt(0, mockUsers.length)];
            return {
                userId: randomUser._id,
                comment: `This is a comment by ${randomUser.username}`,
            };
        });
    };

    const feedItemsResults = []
    const mockFeedItems = mockUsers.flatMap(user => {
        return Array.from({ length: 5 }, (_, index) => ({
            id: `feed_${user._id}_${index}`,
            userId: user._id,
            imageUrl: user.imgUrl, 
            caption: `This is a caption for ${user.username} post ${index + 1}`,
            tags: getRandomTags(),
            comments: getRandomComments(),
            likesCount: getRandomInt(10, 100), 
            createdAt: new Date().toISOString(), 
        }));
    });

    for (const item of mockFeedItems) {
        try {
            const newFeedItem = await feeditemService.create(item);
            feedItemsResults.push(newFeedItem)
            console.log("newFeedItem: " , newFeedItem);
            continue;
        } catch (error) {
            console.error('Error creating feeditem:', error);
            return Promise.reject(error)
        }
    }

    return  Promise.resolve(feedItemsResults)
  }






