const storedLocation = localStorage.getItem("Location");
const storedCheckIn = localStorage.getItem("CheckIn");
const storedCheckOut = localStorage.getItem("CheckOut");
const storedGuest = localStorage.getItem("Guest");
let data;
const search_details=document.getElementById("search-details");
search_details.innerText=JSON.parse(storedLocation) +"| "+ JSON.parse(storedCheckOut) +"| "+ JSON.parse(storedGuest);

async function getDetails(location, checkin, checkout, guest) {
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=2023-09-04&checkout=2023-09-05&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
  const options = {
    method: "GET",
    headers: { 
      // eb6e65e43cmsh225112c58b81b4bp1d6494jsn510d9e153b5d
      "X-RapidAPI-Key": "eb2e65e43cmsh225112c58b81b4bp1d6494jsn510d9e153b5d",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    data = result.results;
      console.log(data)
      // getCards(data);
  } catch (error) {
    console.error(error);
  }
}
    // adding details to search bar
   

    // creating room cards
   let map_details=[];
    const dt=[
        {
          "id": "874444754719199464",
          "url": "https://www.airbnb.com/rooms/874444754719199464",
          "deeplink": "https://www.airbnb.com/rooms/874444754719199464?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 1,
          "name": "Orane Castle",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/8ccd25c1-b9a3-4569-8010-6aea2d16afb6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5697628c-1a7b-4d66-bce2-d519588a2650.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a99788c6-54a2-4f92-9d06-b157fdf84b33.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8fbe1543-48dd-491e-ae1e-abb3577fb824.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/99b3997d-c745-4fe4-828f-6b7d5df82e05.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/291a40a4-0015-40bc-9625-212e0c73bfab.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/264512b7-bdee-4cad-8f4a-2273a0336099.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24c02869-243f-4d5c-a771-589b5a7abb29.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a07dc241-ec40-4ff5-bf9c-6c2ef2d0d809.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/81f1f3b7-4110-4dc0-bc7b-e46e98b1cb00.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1e94c0dc-4144-45df-a6d2-dde8dcca814c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/11b02329-8f90-412d-8761-03900a80908f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89835c5-3f01-4ab6-824c-00c4ad3b7e24.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e8900399-f145-49bd-8f00-032b9c89a3ca.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f5ba013a-affd-471a-9b27-bf19410c13e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/25987d66-3fd9-4e74-a45d-fa1808e4f15e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0bb57adf-87b3-4bd2-93f0-be34a68587bb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9d92fbd3-9e9e-4129-ab4a-c0586215b2f3.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 15.284141483588382,
          "lng": 76.42459504388843,
          "persons": 3,
          "reviewsCount": 7,
          "rating": 4.71,
          "type": "Earthen home",
          "userId": 433672737,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            4,
            132,
            133,
            7,
            8,
            9,
            394,
            522,
            139,
            12,
            527,
            528,
            145,
            657,
            280,
            665,
            30,
            672,
            34,
            37,
            39,
            167,
            40,
            41,
            45,
            46,
            686,
            47,
            179,
            57,
            185,
            61,
            65,
            71,
            73,
            74,
            77,
            79,
            210,
            211,
            85,
            86,
            91,
            93,
            227,
            611,
            100,
            101,
            232,
            364,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 74,
            "currency": "USD",
            "total": 74,
            "priceItems": [
              {
                "title": "$57 x 1 night",
                "amount": 57
              },
              {
                "title": "Airbnb service fee",
                "amount": 10
              },
              {
                "title": "Taxes",
                "amount": 7
              }
            ]
          }
        },
        {
          "id": "53553616",
          "url": "https://www.airbnb.com/rooms/53553616",
          "deeplink": "https://www.airbnb.com/rooms/53553616?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 2,
          "name": "Brise Cottage with Private Pool  & Pantry",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 4,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/4e499487-2213-4bec-8402-d481f3a1894c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/fa0323d9-d2c2-481d-a1c5-3d7a1ca461ac.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/396a506c-b022-4af4-b0b4-bfabc3963e9e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0c7400ac-50d3-4633-9a61-697dbb7e0bb4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bba81e6f-61e1-4bc3-af13-74a5b24601b3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/65dcdf8a-e66e-4b08-bd1d-89fd9ea8a163.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c922982-84d0-4cdb-bb7f-1ecdabbe1e91.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4bea9bdd-45a4-4e4c-b141-87fdf3cc9e98.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/4c7750d2-0754-4564-a399-c61bae6b20d6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/70fa1d79-8c5e-4e87-abe5-b7f95552ed8b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/c0f5c3b2-0f2e-44bf-b620-743359271de9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/a263c8f9-70b5-4935-82f3-db54f328670b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/011a06f0-9d9e-4e00-a51f-b041687fe2df.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/d72421a4-4f49-445d-b2a3-136478d81c4a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/7792e6c3-7fd3-457e-8c4e-25953993324d.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/02976826-8026-4d5e-9f3e-d797502524a9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/1412eb02-f70a-4238-a8c4-1072730c2162.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 15.284861,
          "lng": 76.424171,
          "persons": 5,
          "reviewsCount": 26,
          "rating": 4.92,
          "type": "Farm stay",
          "userId": 433672737,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            4,
            132,
            133,
            7,
            8,
            392,
            9,
            137,
            394,
            522,
            139,
            12,
            527,
            528,
            145,
            657,
            146,
            280,
            665,
            667,
            30,
            415,
            671,
            672,
            34,
            37,
            39,
            167,
            40,
            41,
            42,
            44,
            45,
            685,
            46,
            47,
            687,
            51,
            179,
            55,
            56,
            57,
            185,
            315,
            61,
            65,
            66,
            71,
            73,
            74,
            75,
            77,
            79,
            210,
            211,
            85,
            86,
            90,
            219,
            93,
            94,
            96,
            98,
            611,
            100,
            101,
            103,
            104,
            232,
            107,
            236,
            364,
            251
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 147,
            "currency": "USD",
            "total": 147,
            "priceItems": [
              {
                "title": "$109 x 1 night",
                "amount": 109
              },
              {
                "title": "Airbnb service fee",
                "amount": 18
              },
              {
                "title": "Taxes",
                "amount": 20
              }
            ]
          }
        },
        {
          "id": "46518349",
          "url": "https://www.airbnb.com/rooms/46518349",
          "deeplink": "https://www.airbnb.com/rooms/46518349?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 3,
          "name": "RMR AC STAY - Hampi",
          "bathrooms": 2,
          "bedrooms": 2,
          "beds": 1,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/02421eac-cc79-45c2-bbab-36f4de0b2b60.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/f50d2311-90a6-4cd5-bb53-ff21283e1663.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/c62eb2db-9861-4f5a-a048-3307f771648a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b1d5efe7-079b-403a-946a-185a99a182bf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b1d5efe7-079b-403a-946a-185a99a182bf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/bffc2f48-ffa1-481a-9163-648505e2faf0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/fe10aa3e-fbab-4cc2-b7f8-083eb19a11cb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8a2ceeef-6112-4417-b511-f5fc899f0ef2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/956832f1-2057-4a27-a5ba-9f3c8130e9d0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b5ec1642-9207-4957-a7c6-036d19dbefa2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8ffcd4a4-a4e1-46b8-9b15-c531729e5e48.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/40208a18-d849-4633-a647-b5dedbd0aa15.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/e5fd2a4f-9903-45ac-af4c-f0538551f67e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8add0023-8de5-4573-a3d1-6295f470b109.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/4344ed51-aa0b-42fd-b010-4850e16fe15f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8bfa8790-460e-4296-b9b4-150b47fb4f7e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/a690f757-6522-45c0-81a9-f90ea254452d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/c6488d76-bad0-4975-a369-f669a36b5f9e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/86b8232f-4b7b-4eb7-80ae-55add39c9f2c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b0430dd7-61dc-4cdf-899b-fdee7b28ad2d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/7e93f4c9-edb3-4575-bbbd-e16ca6dd206f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/17d65210-f750-4309-8acb-2c90fc8cb3cf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/4d2f6a2b-c535-44f8-8351-f3b5deb434d8.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.275512,
          "lng": 76.387177,
          "persons": 4,
          "reviewsCount": 7,
          "rating": 4.14,
          "type": "Entire rental unit",
          "userId": 139642238,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            32,
            1,
            4,
            5,
            103,
            40,
            104,
            9,
            41,
            11,
            12,
            44,
            77,
            47,
            16,
            51,
            23,
            55,
            57,
            31
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 39,
            "currency": "USD",
            "total": 39,
            "priceItems": [
              {
                "title": "$30 x 1 night",
                "amount": 30
              },
              {
                "title": "Taxes",
                "amount": 9
              }
            ]
          }
        },
        {
          "id": "878645868719339073",
          "url": "https://www.airbnb.com/rooms/878645868719339073",
          "deeplink": "https://www.airbnb.com/rooms/878645868719339073?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 4,
          "name": "Bela Castle Hampi",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/a99788c6-54a2-4f92-9d06-b157fdf84b33.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/12a2879a-20ee-4e80-945d-06507fcbde95.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/25987d66-3fd9-4e74-a45d-fa1808e4f15e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5697628c-1a7b-4d66-bce2-d519588a2650.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8fbe1543-48dd-491e-ae1e-abb3577fb824.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/99b3997d-c745-4fe4-828f-6b7d5df82e05.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/291a40a4-0015-40bc-9625-212e0c73bfab.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8ccd25c1-b9a3-4569-8010-6aea2d16afb6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/264512b7-bdee-4cad-8f4a-2273a0336099.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24c02869-243f-4d5c-a771-589b5a7abb29.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a07dc241-ec40-4ff5-bf9c-6c2ef2d0d809.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/81f1f3b7-4110-4dc0-bc7b-e46e98b1cb00.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1e94c0dc-4144-45df-a6d2-dde8dcca814c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/11b02329-8f90-412d-8761-03900a80908f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89835c5-3f01-4ab6-824c-00c4ad3b7e24.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e8900399-f145-49bd-8f00-032b9c89a3ca.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f5ba013a-affd-471a-9b27-bf19410c13e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0bb57adf-87b3-4bd2-93f0-be34a68587bb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9d92fbd3-9e9e-4129-ab4a-c0586215b2f3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/049f2dd1-46df-48a3-8198-caa46844d216.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/003c9078-9f8e-4096-8c54-1a160d9d2bff.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f0535c4c-2b02-4b27-9342-16f803ea4f49.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4b730d2c-334e-4a33-b395-f2e5d827b870.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/aa1e5e1f-f3fc-4f26-8241-3183c052d9c8.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 15.28606,
          "lng": 76.42411,
          "persons": 3,
          "reviewsCount": 2,
          "type": "Entire cabin",
          "userId": 433672737,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            4,
            132,
            5,
            133,
            7,
            8,
            392,
            9,
            394,
            522,
            139,
            12,
            527,
            528,
            145,
            657,
            280,
            665,
            30,
            672,
            34,
            37,
            39,
            167,
            40,
            41,
            44,
            45,
            46,
            686,
            47,
            179,
            57,
            185,
            61,
            65,
            71,
            73,
            74,
            77,
            79,
            210,
            211,
            85,
            86,
            91,
            93,
            227,
            611,
            100,
            101,
            232,
            364,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 75,
            "currency": "USD",
            "total": 75,
            "priceItems": [
              {
                "title": "$58 x 1 night",
                "amount": 58
              },
              {
                "title": "Airbnb service fee",
                "amount": 10
              },
              {
                "title": "Taxes",
                "amount": 7
              }
            ]
          }
        },
        {
          "id": "664193177678942827",
          "url": "https://www.airbnb.com/rooms/664193177678942827",
          "deeplink": "https://www.airbnb.com/rooms/664193177678942827?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 5,
          "name": "Independent studio for an experiential Hampi stay",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 2,
          "city": "Hanumanahalli",
          "images": [
            "https://a0.muscache.com/im/pictures/912bca46-1831-4c85-a9c9-938da26f3b9e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48555c7d-2dd9-459d-9a93-cb232d8a2eb2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f16c5994-09c9-4603-89eb-cd4f594ccb89.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/061fea5d-35d3-4d47-be44-89492d0afdaa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/43c59380-2289-4f62-8ce1-0ff999a9ece7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c31f4df-f68c-4185-972d-d6a9b273a0b2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6efaa571-4c10-482b-8155-d66f6ae3256e.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/8a0d61dd-5383-412a-ab9b-6387b0aa02ae.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.35303,
          "lng": 76.49275,
          "persons": 3,
          "reviewsCount": 10,
          "rating": 4.9,
          "type": "Entire home",
          "userId": 465509399,
          "address": "Hanumanahalli, Karnataka, India",
          "amenityIds": [
            5,
            9,
            93,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 109,
            "currency": "USD",
            "total": 109,
            "priceItems": [
              {
                "title": "$85 x 1 night",
                "amount": 85
              },
              {
                "title": "Airbnb service fee",
                "amount": 14
              },
              {
                "title": "Taxes",
                "amount": 10
              }
            ]
          }
        },
        {
          "id": "797376118028202653",
          "url": "https://www.airbnb.com/rooms/797376118028202653",
          "deeplink": "https://www.airbnb.com/rooms/797376118028202653?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 6,
          "name": "Brise castle",
          "bathrooms": 6,
          "bedrooms": 4,
          "beds": 4,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/a99788c6-54a2-4f92-9d06-b157fdf84b33.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/264512b7-bdee-4cad-8f4a-2273a0336099.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24c02869-243f-4d5c-a771-589b5a7abb29.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8ccd25c1-b9a3-4569-8010-6aea2d16afb6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8fbe1543-48dd-491e-ae1e-abb3577fb824.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a07dc241-ec40-4ff5-bf9c-6c2ef2d0d809.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/291a40a4-0015-40bc-9625-212e0c73bfab.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5697628c-1a7b-4d66-bce2-d519588a2650.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/99b3997d-c745-4fe4-828f-6b7d5df82e05.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/81f1f3b7-4110-4dc0-bc7b-e46e98b1cb00.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1e94c0dc-4144-45df-a6d2-dde8dcca814c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/11b02329-8f90-412d-8761-03900a80908f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89835c5-3f01-4ab6-824c-00c4ad3b7e24.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e8900399-f145-49bd-8f00-032b9c89a3ca.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f5ba013a-affd-471a-9b27-bf19410c13e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0bb57adf-87b3-4bd2-93f0-be34a68587bb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/25987d66-3fd9-4e74-a45d-fa1808e4f15e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9d92fbd3-9e9e-4129-ab4a-c0586215b2f3.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 15.28563,
          "lng": 76.42465,
          "persons": 8,
          "reviewsCount": 4,
          "rating": 5,
          "type": "Private room in castle",
          "userId": 433672737,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            65,
            132,
            7,
            71,
            8,
            9,
            73,
            74,
            394,
            522,
            139,
            12,
            77,
            79,
            527,
            528,
            145,
            657,
            211,
            85,
            86,
            280,
            665,
            219,
            93,
            30,
            672,
            34,
            227,
            611,
            100,
            37,
            101,
            39,
            167,
            40,
            232,
            41,
            364,
            45,
            46,
            686,
            47,
            179,
            57,
            185,
            61,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 327,
            "currency": "USD",
            "total": 327,
            "priceItems": [
              {
                "title": "$242 x 1 night",
                "amount": 242
              },
              {
                "title": "Airbnb service fee",
                "amount": 41
              },
              {
                "title": "Taxes",
                "amount": 44
              }
            ]
          }
        },
        {
          "id": "715580549751365928",
          "url": "https://www.airbnb.com/rooms/715580549751365928",
          "deeplink": "https://www.airbnb.com/rooms/715580549751365928?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 7,
          "name": "Bamboo cottage with own bathroom and balcony",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/9b5b2eed-c0bf-46e9-93a9-44d92a40b6b0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/9c131d1f-33e2-4620-a24e-448906d7bd96.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/123d05a4-00b0-46e0-a0d2-5f2d50e98408.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/29eaf340-770d-4f3b-82c1-7010df1b4dc1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f2fb7558-e237-49fd-abfa-0fb7a4ff091a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/13e34842-9ed3-4ebc-a38e-a1819abb1d57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a3557658-9763-4bba-99a9-fb2bb9cd26bf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66522559-8239-4e55-9bad-042345991b0a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/718bed3d-4594-45df-933d-067e21e89f59.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89e9322-a2e0-4d1b-82d5-a7f2b6a9a088.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5d79dd42-bbaf-4ae4-bd60-f81997ba023e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f5b775b-2978-4f1a-9937-d610bb7aa810.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2a528c68-f406-4a41-ac5e-8e5d5a43db46.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/be0ed552-bfe0-4718-8f0a-8b809b53be99.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c9812aa-6a04-4abb-88ca-9b158e74b36d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32ff23ac-6234-4ccf-8265-f9ddae4f6ac5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e66ec341-7bdb-414a-a196-3f42f3b6a9b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/cd1109bf-6d4b-43a9-8def-c7b28fc9985d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/6412b743-c280-476c-9880-6ce426176178.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.350229988618493,
          "lng": 76.43267314275074,
          "persons": 2,
          "reviewsCount": 4,
          "rating": 4.5,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            179,
            4,
            100,
            85,
            40,
            9,
            42,
            12,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 32,
            "currency": "USD",
            "total": 32,
            "priceItems": [
              {
                "title": "$25 x 1 night",
                "amount": 25
              },
              {
                "title": "Airbnb service fee",
                "amount": 4
              },
              {
                "title": "Taxes",
                "amount": 3
              }
            ]
          }
        },
        {
          "id": "37130223",
          "url": "https://www.airbnb.com/rooms/37130223",
          "deeplink": "https://www.airbnb.com/rooms/37130223?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 8,
          "name": "RMR Village stay",
          "bathrooms": 3,
          "bedrooms": 3,
          "beds": 10,
          "city": "Gudioblapura",
          "images": [
            "https://a0.muscache.com/im/pictures/5a3de67f-c82a-4d0b-823e-821ba45d92d7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0c356d46-5a9e-4476-8765-61a489347053.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7bea9f7b-adbb-47c4-91f7-1d5269f57922.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8c9ab554-c407-49bb-901d-62e3cc98f7c8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/470a2706-c7de-45ce-bbbb-a90251c2057c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/29f6b733-fb84-430b-a410-68ba15b92d90.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a3af1577-2591-4b5d-9608-2849764a096d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7cf6862d-d0dc-4663-8333-11d15e747015.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5fe3223a-1be1-4161-ac34-dab07fae6170.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2eebe957-3f8e-42d8-9ec2-592aa34bfbe1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ae4b90e9-a71e-4920-b0a6-02c2b7c31798.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0ddc3d71-34a5-4ef0-87bc-847fafa53d9f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fc697fbf-95a7-4cb3-889d-a6cb24e09ea6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a0999021-e4ba-444b-9cb3-9620fc3dd6c2.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.30716,
          "lng": 76.3954,
          "persons": 10,
          "reviewsCount": 15,
          "rating": 3.33,
          "type": "Entire rental unit",
          "userId": 139642238,
          "address": "Gudioblapura, Karnataka, India",
          "amenityIds": [
            16,
            32,
            51,
            4,
            54,
            40,
            9,
            41,
            11,
            12,
            47
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 134,
            "currency": "USD",
            "total": 134,
            "priceItems": [
              {
                "title": "$109 x 1 night",
                "amount": 109
              },
              {
                "title": "Cleaning fee",
                "amount": 5
              },
              {
                "title": "Taxes",
                "amount": 20
              }
            ]
          }
        },
        {
          "id": "896729565594385066",
          "url": "https://www.airbnb.com/rooms/896729565594385066",
          "deeplink": "https://www.airbnb.com/rooms/896729565594385066?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 9,
          "name": "Most Preferred Homestay in Hampi",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 2,
          "city": "Kamalapur",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-868427426870261802/original/65fb99c6-4c44-4cc9-b551-c7f215b6b85d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-868427426870261802/original/dc153c76-2601-4dff-a0e0-1de0c120ce96.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-868427426870261802/original/d98be630-06f2-40cb-8225-c8a125ec57a6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-868427426870261802/original/9004448a-ef42-4a3f-bd5f-c221e515dff7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-868427426870261802/original/970f9e19-87e2-4bc2-a693-80236dbef6a5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/0ff2febf-b45b-4413-9e51-0f8cbeb5d236.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/90e2e8ac-e917-41b9-86e0-02a234aa8d9e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/330ad5b9-9a22-4b26-b116-b79f4784883e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f6d72665-d4c3-43d5-92ba-d15c78abfd86.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/dbdb27b5-56cb-4928-a2ed-a9e3d54e7fd6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e463a9bb-cec2-4876-a36d-879a6d084292.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2218c0df-20af-4626-bdb0-4dd8c43394e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f4b5792-40f7-4263-a4fc-a54182c79f81.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b5846821-1727-4976-b27d-989d15d84334.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8a9156de-9058-478f-891f-50b7f024b073.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32141dca-5fea-4b05-a509-e6e6c18cc6b1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d7c41b91-46dd-4f96-8de6-fa3813ff9d37.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/20aa8e58-f8cf-4dd4-8408-6c4a78808028.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bc8e518f-5534-423e-ba5f-1f4c3831e5dd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b3b5c6b4-02ec-48ff-8a49-2ba31ed5a1f6.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=K&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.3052971,
          "lng": 76.47655189999999,
          "persons": 3,
          "reviewsCount": 0,
          "type": "Private room in home",
          "userId": 509823936,
          "address": "Kamalapur, Karnataka, India",
          "amenityIds": [
            33,
            66,
            4,
            100,
            9,
            91,
            47
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 14,
            "currency": "USD",
            "total": 14,
            "priceItems": [
              {
                "title": "$14 x 1 night",
                "amount": 14
              },
              {
                "title": "Special offer",
                "amount": 3
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "961505082299829715",
          "url": "https://www.airbnb.com/rooms/961505082299829715",
          "deeplink": "https://www.airbnb.com/rooms/961505082299829715?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 10,
          "name": "beautiful bamboo cottages",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sangapur",
          "images": [
            "https://a0.muscache.com/im/pictures/6619807c-b17e-492b-b93e-d5c6ea66a81f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b7237e97-61de-4beb-b9c1-0196078499db.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ad294f49-ddc3-476d-83e6-1a2328b5ee1b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/84576739-807b-47be-8c19-edf73ada1a77.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24ac8376-d233-4fcc-9e76-350db0c3742a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b4de7035-87c9-4394-820b-c9a4133ec371.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/18a1779d-2af5-4c29-93d4-4cc0eb74aa9b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0f5e26c7-f522-44d2-addd-61a70c4d5f9c.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/177fd19f-bd5c-40de-9b33-9dfe07ea9e1c.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.346677130685066,
          "lng": 76.43336100392416,
          "persons": 2,
          "reviewsCount": 0,
          "type": "Private room in cabin",
          "userId": 272926588,
          "address": "Sangapur, Karnataka, India",
          "amenityIds": [
            179,
            4,
            37,
            39,
            9,
            47
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 32,
            "currency": "USD",
            "total": 32,
            "priceItems": [
              {
                "title": "$31 x 1 night",
                "amount": 31
              },
              {
                "title": "Special offer",
                "amount": 6
              },
              {
                "title": "Airbnb service fee",
                "amount": 4
              },
              {
                "title": "Taxes",
                "amount": 3
              }
            ]
          }
        },
        {
          "id": "794782263575347053",
          "url": "https://www.airbnb.com/rooms/794782263575347053",
          "deeplink": "https://www.airbnb.com/rooms/794782263575347053?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 11,
          "name": "Agri Fun Hampi 2",
          "bathrooms": 3,
          "bedrooms": 1,
          "beds": 2,
          "city": "Gudioblapura",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/6878139d-98a5-4779-8312-d707d79dd22e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/d907ca60-8809-427e-9e1b-4c213860a022.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/3b3b21b2-f59b-4f92-bdf2-204d45f11724.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/eec1c8f7-a6a3-472b-b310-137b7fa93fb0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/93d2b67a-41c0-4d40-9443-cc36bc0aeb67.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/d59db72b-28dd-413c-afec-f9f3f291d891.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/4a6b7404-8a99-4c6b-857c-c3190c8058c8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/e0872cbd-757d-444f-aa46-8173d9259651.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/96dfd0cf-a0bf-4110-a189-e95d3a794e39.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/4fd8708b-cd3f-4904-ac04-b802df0ac0d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/2f748b3a-0576-4539-b896-45ea21c33a8e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/d5329242-dfbc-482c-9365-758cfba8565b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/e2d352d8-239a-4b9c-9e20-e2ab755b3f67.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/e77a4326-8179-42d8-a615-f49954a525af.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/c1fdede8-9bf3-470c-bc7a-d4c8f689b52f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/bc261063-ac36-45fc-8c22-b83c5088e2bc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/b145d11c-351e-4584-8649-123791f9b03e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/c4a20da4-0de2-4075-b920-1afcbda44b6d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794782263575347053/original/f23dea7a-4745-4e00-9c7b-db9351b4dafb.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.310542798467033,
          "lng": 76.41734417527914,
          "persons": 4,
          "reviewsCount": 0,
          "type": "Private room in farm stay",
          "userId": 139642238,
          "address": "Gudioblapura, Karnataka, India",
          "amenityIds": [
            32,
            131,
            179,
            5,
            9,
            11,
            219,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 40,
            "currency": "USD",
            "total": 40,
            "priceItems": [
              {
                "title": "$36 x 1 night",
                "amount": 36
              },
              {
                "title": "Taxes",
                "amount": 4
              }
            ]
          }
        },
        {
          "id": "47982510",
          "url": "https://www.airbnb.com/rooms/47982510",
          "deeplink": "https://www.airbnb.com/rooms/47982510?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 12,
          "name": "Its a nature gate...",
          "bathrooms": 6,
          "bedrooms": 6,
          "beds": 6,
          "city": "Hanumanahalli",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-47982510/original/d2d582ca-ce4d-4038-81f4-336c7cb66899.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/05017890-762a-499f-af93-9c293d3a6c7d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/22ec59e8-9614-48bc-9f7e-bb4b1c3a89a5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2b0d78c9-0916-46db-aa42-82da9d331be1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c1992b3-63f0-46ca-9859-f93af04f8e98.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7dfdbc03-370f-413f-9761-daf988ac1c1b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e23a1ddd-b96d-4da5-9c88-d10d148d9d38.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f9e72085-5ec2-4764-9f00-a7fa811560d8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bf792251-b0e9-41c9-9baf-d90d0487bff5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/603a80eb-3bb0-4933-826b-ae5eed455648.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f83f95e1-ef36-480c-8b08-e81a1068914e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/00aa5ec3-2aa0-4263-bcf7-db037af2962a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9ca15421-be65-4dee-ba2f-304630638b69.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ae28bb9f-2878-44ce-918e-816b535667a7.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/736d2607-5bb5-4e47-a6d4-b338e4c5876a.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.34656,
          "lng": 76.46757,
          "persons": 12,
          "reviewsCount": 13,
          "rating": 4.54,
          "type": "Private room in bed and breakfast",
          "userId": 177579781,
          "address": "Hanumanahalli, Karnataka, India",
          "amenityIds": [
            32,
            97,
            4,
            100,
            37,
            101,
            39,
            40,
            9,
            42,
            11,
            12,
            47,
            57,
            27,
            91,
            93
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 77,
            "currency": "USD",
            "total": 77,
            "priceItems": [
              {
                "title": "$60 x 1 night",
                "amount": 60
              },
              {
                "title": "Airbnb service fee",
                "amount": 10
              },
              {
                "title": "Taxes",
                "amount": 7
              }
            ]
          }
        },
        {
          "id": "776608408678110321",
          "url": "https://www.airbnb.com/rooms/776608408678110321",
          "deeplink": "https://www.airbnb.com/rooms/776608408678110321?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 13,
          "name": "Agri-Fun Hampi 1",
          "bathrooms": 2,
          "bedrooms": 1,
          "beds": 4,
          "city": "Gudioblapura",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/4c2e38cb-b9cf-41a0-a1a8-65669db29da5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/43776ba9-354c-4285-8abd-2ed4f7c2381d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/4f5a2cc9-cca0-478d-b843-da6a54a3789f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/0d3ef805-1160-4d81-81ce-626c54737d33.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/d20b1936-e993-467b-9bde-27f6fe93886a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/c4301579-07f7-4539-90e7-f554dcbd7eb5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/a25f62d2-d07f-4ff3-81c4-861306df467c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/b089ae54-053f-4411-b2fb-8244f0b6ea27.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/7b564b50-499d-4b16-b735-c4c2059ca4fc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/e889da27-90c3-4a8f-a269-90801b81ca46.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/5a5455f6-0ff4-47a2-a6a8-7f55ac4234b4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/0bb178d2-41ab-4363-a2ad-3bd53e90cda8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/0f72c491-5668-45cd-a0bc-2155aeeb1165.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/dc3ca29e-6dff-4876-9406-ef101f0fbd9e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/9a5cda2b-aba1-4b96-82fe-4e2d76df3400.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/aee48c70-f0d9-467e-9343-f904d2495604.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/57c2e102-d6eb-4f84-98c8-b2e8ded83d00.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/e3c8c8c4-853f-4a50-a38a-56f0bd62765b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/038c8106-8151-4f15-a94d-6fdd420775b6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/341a9718-75cb-4af3-832c-005295148bd9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/e0419a2a-365c-44e0-8b17-5109530beed9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/707780c9-9cc1-445f-a547-4c3f194769a4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/5e54c9a1-269c-4e12-92aa-917ca6c22a78.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/6fbee38d-a634-483c-9861-fbc99e4c0cad.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/38fdb5ed-bffa-46c1-b915-bd56f73a23d7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/1c5eb2cc-0b96-4a13-bcb4-e0271e073850.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-776608408678110321/original/de34bf18-737a-4204-9351-2112a3fc6a96.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/3ded133c-d696-4511-9f1f-06f950247b7f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/99c63597-6e7f-4cd5-bf4c-e4c92c97e6d6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/768e10d3-3a22-47f9-a9b1-810cedaa4a22.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.30532,
          "lng": 76.41277,
          "persons": 8,
          "reviewsCount": 0,
          "type": "Private room in farm stay",
          "userId": 139642238,
          "address": "Gudioblapura, Karnataka, India",
          "amenityIds": [
            97,
            132,
            103,
            40,
            104,
            392,
            9,
            107,
            12,
            77,
            179,
            219,
            61
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 47,
            "currency": "USD",
            "total": 47,
            "priceItems": [
              {
                "title": "$42 x 1 night",
                "amount": 42
              },
              {
                "title": "Taxes",
                "amount": 5
              }
            ]
          }
        },
        {
          "id": "795954558852833474",
          "url": "https://www.airbnb.com/rooms/795954558852833474",
          "deeplink": "https://www.airbnb.com/rooms/795954558852833474?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 14,
          "name": "Agri fun small tent stay",
          "bathrooms": 2,
          "bedrooms": 1,
          "beds": 0,
          "city": "Gudioblapura",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/c332e632-6d71-4198-839c-409f991f6509.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/0a82711e-865f-47d1-a9aa-c20001524fab.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/5592ecac-4d23-40fb-b375-0479bb3aeaea.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/a7dc21af-c1b0-49dd-bbe2-7d0340863c35.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/01f59f2c-01af-44fb-8396-c27e8377f61f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/15e0f4df-ec0f-4f65-965b-0d224ef3a71b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/9ed3ebb3-02af-4143-bd52-b94cda70a60a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/682cd8b6-1630-4b36-aa53-6300caeca9e5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/76b5a3d3-bce5-412f-a8a0-a35e21d9e08f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/9e8c57c2-2144-4ab5-9428-ed65cea2b71b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/53f53684-95dd-43c7-86cd-96d86dfcbe57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6fd94257-6c12-4222-83eb-b4b568c3a901.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.3061975,
          "lng": 76.41312880000001,
          "persons": 2,
          "reviewsCount": 1,
          "type": "Shared room in tent",
          "userId": 139642238,
          "address": "Gudioblapura, Karnataka, India",
          "amenityIds": [
            179,
            9,
            219
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 17,
            "currency": "USD",
            "total": 17,
            "priceItems": [
              {
                "title": "$15 x 1 night",
                "amount": 15
              },
              {
                "title": "Taxes",
                "amount": 2
              }
            ]
          }
        },
        {
          "id": "663677235537347165",
          "url": "https://www.airbnb.com/rooms/663677235537347165",
          "deeplink": "https://www.airbnb.com/rooms/663677235537347165?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 15,
          "name": "Abhi Homestay Hampi",
          "bathrooms": 2,
          "bedrooms": 2,
          "beds": 2,
          "city": "Bellary",
          "images": [
            "https://a0.muscache.com/im/pictures/87cfc839-52e4-426e-bd1f-e5a5126b6617.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48941419-8987-4596-8026-63a05d4c4486.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5ba1a32e-0b72-497a-807b-54ac82662341.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d36add9e-4de7-4755-b74f-a6310402c5d9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fbc06adb-c424-4631-a054-e2784ed59ece.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/de1dcf69-9272-4804-9d60-12e9bd921c0e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d8c959f5-8452-4240-86f2-a2cfe36b8a7f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9257c5f5-752f-43eb-83b4-655144f56832.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f4301e9e-0240-4013-ab70-64f4a894e9d0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7fd0f550-52b9-4643-abb7-2d516c938ad3.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=R&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.3118,
          "lng": 76.45008,
          "persons": 3,
          "reviewsCount": 0,
          "type": "Private room in bed and breakfast",
          "userId": 335751632,
          "address": "Bellary, Karnataka, India",
          "amenityIds": [
            1,
            4,
            100,
            5,
            37,
            8,
            9,
            42,
            139,
            12,
            179,
            85,
            90,
            91,
            61,
            93,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 39,
            "currency": "USD",
            "total": 39,
            "priceItems": [
              {
                "title": "$30 x 1 night",
                "amount": 30
              },
              {
                "title": "Airbnb service fee",
                "amount": 5
              },
              {
                "title": "Taxes",
                "amount": 4
              }
            ]
          }
        },
        {
          "id": "51113399",
          "url": "https://www.airbnb.com/rooms/51113399",
          "deeplink": "https://www.airbnb.com/rooms/51113399?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 16,
          "name": "Akash homestay  \nwith a private parking",
          "bathrooms": 3,
          "bedrooms": 3,
          "beds": 4,
          "city": "Hampi",
          "images": [
            "https://a0.muscache.com/im/pictures/18162565-addd-43fb-adcd-362d2c23bf71.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37474e64-5c18-4d25-8fb8-12653ba0bdfb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c8489a83-6513-4b45-bbf3-3639201e5e1d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6a948d62-8711-4cca-a1cc-054ce9c0bf87.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f68f3873-9eb4-4cb8-a884-93a20f5ed996.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1dc9163f-5af5-434d-bbe8-9c4629eb89d1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/89ae2a92-1854-4257-a482-cc703a22c6f7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9e6e2021-ede4-4415-b17f-7a2ab5b337a2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/811c6ba7-03a6-4054-b57b-caadebf5eb35.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/00beffd3-da0e-4f9f-bce1-13de8b60674b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2dc913f9-2efb-4dd4-a8dc-20876354d321.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/781bd1c0-7952-4a32-b91e-783a17772639.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c486b104-7c9c-4325-8691-868de348066c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/72c128c5-4c9f-4b9b-bc52-80a16f0a4fe4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d432402b-76b5-44a1-bb4d-673d8fa5068e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1247741d-e6ff-46d6-b213-86732c1a5b8a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c4640ab0-112b-4d3f-b2cd-cbad41f56d55.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/880adab3-bc1e-4392-bf78-a17a678dd2ed.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/70bbef7f-2bd8-4c30-bd03-45b41d8fc9de.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1c4904d8-74f5-4d5b-a257-fe2bc129331a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/21ab0918-1b96-441f-98f7-d1293fe9f80f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/af520787-4ec0-46f2-b0d2-f287d981728f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/64ad1079-122f-4c49-ba1c-d8e662af8465.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/551204d7-23ef-42d8-a5ab-416f354c7391.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/74f5a4d6-be73-4630-9771-f312b30a0bdb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b77a29d1-b7ac-4ffe-8bce-9423013fdea0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/246feed9-11ba-48bd-aed8-36655c969135.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/614a240e-3450-4118-8085-cf17e7337109.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26d95a31-ad37-44c5-8f7c-d854a7e8955a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/be715e74-3ede-49c5-81c1-2d9fdf550d22.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/f6656d99-2ad7-4f0b-a230-ed4cca7aa4f6.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.31011,
          "lng": 76.44573,
          "persons": 11,
          "reviewsCount": 1,
          "type": "Private room in villa",
          "userId": 413604323,
          "address": "Hampi, Karnataka, India",
          "amenityIds": [
            1,
            65,
            4,
            5,
            9,
            73,
            394,
            11,
            139,
            12,
            77,
            79,
            528,
            85,
            86,
            23,
            87,
            665,
            667,
            415,
            37,
            103,
            40,
            104,
            42,
            44,
            236,
            46,
            47,
            51,
            54,
            57,
            62
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 109,
            "currency": "USD",
            "total": 109,
            "priceItems": [
              {
                "title": "$85 x 1 night",
                "amount": 85
              },
              {
                "title": "Airbnb service fee",
                "amount": 14
              },
              {
                "title": "Taxes",
                "amount": 10
              }
            ]
          }
        },
        {
          "id": "771000269620031477",
          "url": "https://www.airbnb.com/rooms/771000269620031477",
          "deeplink": "https://www.airbnb.com/rooms/771000269620031477?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 17,
          "name": "2 BHK with pool surrounded by farms",
          "bathrooms": 2.5,
          "bedrooms": 2,
          "beds": 4,
          "city": "Kamalapur",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-771000269620031477/original/d23c0854-10ad-4137-a2c9-1ce81142dd9f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-771000269620031477/original/cd6d0642-59a0-4c4c-b15c-07b79af0d5f5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-771000269620031477/original/1296225a-145a-415d-ba87-3c27069a741f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-771000269620031477/original/2d348867-356d-46d0-a536-56b34adafa40.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-771000269620031477/original/5490fc93-92ac-408e-aabb-02bd6d3739b1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-771000269620031477/original/77d7d3b4-36bf-4299-a999-d98606e5dd87.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/904a2c01-f5d8-4bd2-a6fe-f6c2c3c37eee.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.30688,
          "lng": 76.47585,
          "persons": 6,
          "reviewsCount": 0,
          "type": "Farm stay",
          "userId": 448702638,
          "address": "Kamalapur, Karnataka, India",
          "amenityIds": [
            32,
            37,
            7,
            103,
            8,
            40,
            104,
            9,
            11,
            107,
            12,
            79,
            179,
            219,
            61,
            93,
            94
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 101,
            "currency": "USD",
            "total": 101,
            "priceItems": [
              {
                "title": "$79 x 1 night",
                "amount": 79
              },
              {
                "title": "Airbnb service fee",
                "amount": 13
              },
              {
                "title": "Taxes",
                "amount": 9
              }
            ]
          }
        },
        {
          "id": "780306229340953933",
          "url": "https://www.airbnb.com/rooms/780306229340953933",
          "deeplink": "https://www.airbnb.com/rooms/780306229340953933?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 18,
          "name": "Suresh Homestay",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Kadirampura",
          "images": [
            "https://a0.muscache.com/im/pictures/6f9f8e2e-379f-4cdf-9e18-7da670ac152f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/edbf17bf-b6ea-451f-b001-2ad183b5e68b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/dc55bb1f-8b00-4fa2-995c-1570d800542e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/35ae7385-f2d4-4295-835e-a2bc14542ac5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/67677b96-6746-4703-9949-5bb365822a48.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=A&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.31089,
          "lng": 76.44556,
          "persons": 4,
          "reviewsCount": 0,
          "type": "Private room in bed and breakfast",
          "userId": 480711748,
          "address": "Kadirampura, Karnataka, India",
          "amenityIds": [
            1,
            5,
            40,
            232,
            9,
            42,
            44,
            77,
            47,
            179,
            85,
            665,
            93
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 66,
            "currency": "USD",
            "total": 66,
            "priceItems": [
              {
                "title": "$51 x 1 night",
                "amount": 51
              },
              {
                "title": "Airbnb service fee",
                "amount": 9
              },
              {
                "title": "Taxes",
                "amount": 6
              }
            ]
          }
        },
        {
          "id": "934685981042581769",
          "url": "https://www.airbnb.com/rooms/934685981042581769",
          "deeplink": "https://www.airbnb.com/rooms/934685981042581769?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 19,
          "name": "Cottages at Virupapuragaddi HFR",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 2,
          "city": "Virupapuragaddi",
          "images": [
            "https://a0.muscache.com/im/pictures/0b48ba47-2a15-41c3-bea2-7e18182183ea.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/af233911-5713-4119-996c-9eca5ed5ea64.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cc4615ed-6a8e-4a1a-b47b-d7a9c6585f65.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/716a7ef2-abc4-45ab-823c-02b867813f85.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/691d973b-eb23-4b3d-a8cd-6e3aa7e2dfb5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2e8fc783-e7c0-4318-a376-efecaf3c41a5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/12369c4c-c0f0-4805-9415-669441fcc95e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0d4741b9-c579-42a5-993f-3db21d791b16.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/28a4f32f-fb2b-45ad-a24e-d9babdd7fd24.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3aa9b274-c09b-41f2-9198-b3a89ad23c2e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/aa1ff8e9-1dc0-449c-9156-45c8e4a8c403.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b9a1e1fc-3d84-4d04-8478-63a109084036.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b1209ae0-937e-45c6-9596-476014540f42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/85ab1d92-6566-4f3d-af10-14c86991d615.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3f34c094-dcf2-448e-b285-fea4941781e0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6d173bdc-5cba-428f-8eb1-62886d211359.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.34448372280958,
          "lng": 76.47006631695301,
          "persons": 2,
          "reviewsCount": 0,
          "type": "Entire guesthouse",
          "userId": 226713108,
          "address": "Virupapuragaddi, Karnataka, India",
          "amenityIds": [
            32,
            4,
            40,
            9,
            11,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 14,
            "currency": "USD",
            "total": 14,
            "priceItems": [
              {
                "title": "$11 x 1 night",
                "amount": 11
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "40501852",
          "url": "https://www.airbnb.com/rooms/40501852",
          "deeplink": "https://www.airbnb.com/rooms/40501852?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 20,
          "name": "Baba Cafe, Tents near Anjinadrihill, Sanapur Lake.",
          "bathrooms": 2,
          "bedrooms": 4,
          "beds": 2,
          "city": "Hampi",
          "images": [
            "https://a0.muscache.com/im/pictures/7f41440c-e060-4599-8294-4b0192b6ad09.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/280b42e7-04ca-4942-b232-a03671fe1913.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6005dd1b-0a59-4dc8-84fc-6515f38fa336.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c92f5c28-39c2-4f9a-a61a-9f44aa3be0d3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d749e7bf-d99b-4dcb-af0e-cb9b17a07c12.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ec5e3531-60b0-4efb-9d95-8fea9661f93f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cb167efe-5a02-4d32-a698-70213e7ad3c8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3cd51d58-a46a-46e5-a142-6cfec869633f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e05bf4d7-29fe-4ac8-96dd-51bef3fa3183.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a225e141-954f-4aaa-acd6-371cc81c21ce.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/87f12790-2a04-4164-b42a-7e41d66195a0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c8508c9e-8594-427b-a40a-61493ac18c9d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0868faf1-607c-4e81-81a0-3635a6d93fdb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d8390fa5-c052-400e-8ec7-59edc367fb06.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0884e073-82bf-44f2-b7fd-a6c9bc56391d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a052ada1-82e1-45e0-bbb3-1333871dcebe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c9ad2357-7c82-49f0-a3c5-2a71a2232313.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/25f9f35a-2765-432c-bb01-8816986570b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48853702-a262-4044-b98e-9d613bfcbe8a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e2a3a4d6-2a6e-4f94-bb19-6d73ea64f01b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/aa979051-67c5-47f6-8723-9b5d0a7aaca6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c69c3bd0-f9ba-4d22-a102-d88687719d04.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6553b51d-f5e6-4ca6-8feb-5b07ba7d1b10.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e2706d85-25a8-41e3-93e3-cb7fec7b3d8b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5ade7bb6-8289-4b49-82cc-b066ed1a5cf3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/46185829-2d39-446c-81d5-62def8e91813.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7949d179-57c8-4a58-a207-9959e5ecf1ae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5829a008-35d8-4557-9a6e-5de438cb81d1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e69a7b03-c8e0-4a7a-9af0-6ccbf2ae7417.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/382bf25c-5416-4ae6-8221-c67520b1cfb6.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.35236,
          "lng": 76.46663,
          "persons": 10,
          "reviewsCount": 0,
          "type": "Private room in tent",
          "userId": 226713108,
          "address": "Hampi, Karnataka, India",
          "amenityIds": [
            32,
            4,
            40,
            9,
            11,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 13,
            "currency": "USD",
            "total": 13,
            "priceItems": [
              {
                "title": "$10 x 1 night",
                "amount": 10
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "39078991",
          "url": "https://www.airbnb.com/rooms/39078991",
          "deeplink": "https://www.airbnb.com/rooms/39078991?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 21,
          "name": "Lodge Rooms at Hampi. Kaddirampura. Guest house",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Kadirampura",
          "images": [
            "https://a0.muscache.com/im/pictures/b8ffdc09-e0b0-48a6-9161-15d9007e7a76.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9576daf4-6524-4a1a-a5b0-53c950902121.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/650441b3-aab6-4068-a171-fc6039989209.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/51cff95e-d561-4229-82ab-2e82cb9e8984.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/751b2879-6307-4dad-8102-4d76a6cf0fc3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f61ae2c-45d0-4bae-a8a4-2cc6a43ea669.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0bb3211c-6535-4905-8655-fbc3c3f3e670.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0b51225d-42fe-4755-8f44-fc73bf7b1107.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0f94d0fe-5f52-4f56-ab33-18d161d59074.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/97ac7857-0b8d-47b6-9ec6-454b02c2f411.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cf521b9a-8746-47ba-b658-12e238996634.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/54994eeb-a2da-4684-ac4a-35afacf7c675.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c88f85a9-afb1-4c6d-8637-982165707f23.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2ab682cc-0293-4314-a44d-5960e38db774.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2f4c453f-c1eb-45f9-ae82-3cb5b693edf9.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.31087,
          "lng": 76.45025,
          "persons": 2,
          "reviewsCount": 1,
          "type": "Private room in nature lodge",
          "userId": 226713108,
          "address": "Kadirampura, Karnataka, India",
          "amenityIds": [
            4,
            39,
            40,
            9,
            57
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 15,
            "currency": "USD",
            "total": 15,
            "priceItems": [
              {
                "title": "$12 x 1 night",
                "amount": 12
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "878647347597565868",
          "url": "https://www.airbnb.com/rooms/878647347597565868",
          "deeplink": "https://www.airbnb.com/rooms/878647347597565868?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 22,
          "name": "Peeper Castle",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/8ccd25c1-b9a3-4569-8010-6aea2d16afb6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5697628c-1a7b-4d66-bce2-d519588a2650.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a99788c6-54a2-4f92-9d06-b157fdf84b33.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8fbe1543-48dd-491e-ae1e-abb3577fb824.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/99b3997d-c745-4fe4-828f-6b7d5df82e05.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/291a40a4-0015-40bc-9625-212e0c73bfab.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/264512b7-bdee-4cad-8f4a-2273a0336099.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24c02869-243f-4d5c-a771-589b5a7abb29.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a07dc241-ec40-4ff5-bf9c-6c2ef2d0d809.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/81f1f3b7-4110-4dc0-bc7b-e46e98b1cb00.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1e94c0dc-4144-45df-a6d2-dde8dcca814c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/11b02329-8f90-412d-8761-03900a80908f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89835c5-3f01-4ab6-824c-00c4ad3b7e24.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e8900399-f145-49bd-8f00-032b9c89a3ca.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f5ba013a-affd-471a-9b27-bf19410c13e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/25987d66-3fd9-4e74-a45d-fa1808e4f15e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0bb57adf-87b3-4bd2-93f0-be34a68587bb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9d92fbd3-9e9e-4129-ab4a-c0586215b2f3.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 15.28499,
          "lng": 76.42364,
          "persons": 3,
          "reviewsCount": 0,
          "type": "Entire cabin",
          "userId": 433672737,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            4,
            132,
            5,
            133,
            7,
            8,
            9,
            394,
            522,
            139,
            12,
            527,
            528,
            145,
            657,
            280,
            665,
            30,
            672,
            34,
            37,
            39,
            167,
            40,
            41,
            45,
            46,
            686,
            47,
            179,
            57,
            185,
            61,
            65,
            71,
            73,
            74,
            77,
            79,
            210,
            211,
            85,
            86,
            91,
            93,
            227,
            611,
            100,
            101,
            232,
            364,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 76,
            "currency": "USD",
            "total": 76,
            "priceItems": [
              {
                "title": "$59 x 1 night",
                "amount": 59
              },
              {
                "title": "Airbnb service fee",
                "amount": 10
              },
              {
                "title": "Taxes",
                "amount": 7
              }
            ]
          }
        },
        {
          "id": "46518699",
          "url": "https://www.airbnb.com/rooms/46518699",
          "deeplink": "https://www.airbnb.com/rooms/46518699?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 23,
          "name": "RMR Ac stay 1",
          "bathrooms": 2,
          "bedrooms": 2,
          "beds": 2,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/8f05ab78-a4de-4c3e-804d-a8103b9ee264.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/4b200ff8-3f18-4ce6-8e19-177fac92f5ad.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/788e24d1-eea4-43dd-a21c-a61d01c53f03.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/ce6a1e4e-8f4a-4e6f-b639-6ee2f2e48706.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/7f89f5be-8a36-4813-a942-21297eae3031.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/7f14fda9-edd4-4496-a355-37a1e96899e6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/ce6eafc5-5138-4256-b61e-07b24d280fff.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/bc670a90-c3d9-4f28-906e-6ae88fd7b891.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/e9bcdd95-3442-4bb6-88ab-e44119d049da.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/54454c8a-f5f8-44ac-ae33-978e40cf1f03.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/367a5d75-b26e-45a9-a8cb-79e0fc22eb84.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/5337a47c-3f4b-4a42-86a3-565bdc3473a6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/dafc6d79-04b7-4aab-ba40-d65d19dcf37b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/967830c2-e7bb-43b9-8f89-a88097471f4c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/467f34d0-d860-4ce8-96db-78f7709ee9cb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/149352f9-6c0c-4ec3-a434-d3714d4b9867.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/8cbcc3ed-cd38-427a-a6c2-209cb94f1533.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/18c17a02-ec6e-43c8-9d66-4096beedc7cd.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/669acb5c-ece9-4ac0-a8b1-f31ca3aef843.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/a9b3a834-4cc0-4dfd-8c8c-d3dade888a55.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/f84c86af-2f05-42b1-8081-4f7e001bd9e5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/ff1c584b-77de-4fd6-a65e-4a9e9f95faf7.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.27662,
          "lng": 76.38653,
          "persons": 4,
          "reviewsCount": 6,
          "rating": 4,
          "type": "Entire serviced apartment",
          "userId": 139642238,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            1,
            129,
            4,
            5,
            103,
            40,
            104,
            9,
            41,
            11,
            12,
            44,
            77,
            46,
            47,
            16,
            23,
            31
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 36,
            "currency": "USD",
            "total": 36,
            "priceItems": [
              {
                "title": "$30 x 1 night",
                "amount": 30
              },
              {
                "title": "Cleaning fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 4
              }
            ]
          }
        },
        {
          "id": "828390075955885194",
          "url": "https://www.airbnb.com/rooms/828390075955885194",
          "deeplink": "https://www.airbnb.com/rooms/828390075955885194?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 24,
          "name": "Brise stables Hampi",
          "bathrooms": 7.5,
          "bedrooms": 5,
          "beds": 6,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-828390075955885194/original/7bb90741-4337-4017-9d8d-fd3e1e91e112.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/2f6732a7-d72d-48cf-9388-95d255b84a47.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4e499487-2213-4bec-8402-d481f3a1894c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0c7400ac-50d3-4633-9a61-697dbb7e0bb4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ab2ac150-5613-415b-8bdc-08bb0dc55c8e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/70fa1d79-8c5e-4e87-abe5-b7f95552ed8b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/5e04ee37-1fdf-477c-afcd-4ef23531e760.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5fd5ffd5-1662-4c9b-b6b3-b837b45af9c9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/7792e6c3-7fd3-457e-8c4e-25953993324d.png?im_w=720",
            "https://a0.muscache.com/im/pictures/a263c8f9-70b5-4935-82f3-db54f328670b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/4c7750d2-0754-4564-a399-c61bae6b20d6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/80e3cc2f-ff99-4bf9-9f7f-5d6d034c7a63.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/396a506c-b022-4af4-b0b4-bfabc3963e9e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bba81e6f-61e1-4bc3-af13-74a5b24601b3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4bea9bdd-45a4-4e4c-b141-87fdf3cc9e98.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c922982-84d0-4cdb-bb7f-1ecdabbe1e91.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3bcc87ca-d991-4b38-8670-b4d2261b9602.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/d72421a4-4f49-445d-b2a3-136478d81c4a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/da38e752-b9ff-460c-a174-37044786fd47.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8bd97e8c-7076-4099-af8b-977df0e3c151.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6524ebb6-e80b-44af-a299-c32829b0dae0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/709cab8b-f41a-4bff-862b-cc21e7d071cf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5c79729a-d34e-42de-a170-8f6c45502e48.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1a76c24e-4a47-44f2-8f75-99387f7b19f5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ca840471-54a8-40a3-85ed-5a03fcefbbe3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/99845d73-8862-418f-9aa2-51d05f86a68c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/97314220-83a2-44a6-947c-ab8fbea78fcb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-828390075955885194/original/15528587-93e6-4d93-9b28-9e7fbfefa8b5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-828390075955885194/original/b9a86926-4aea-4f90-aa0e-af8c898e5d05.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 15.28282,
          "lng": 76.41873,
          "persons": 15,
          "reviewsCount": 0,
          "type": "Castle",
          "userId": 433672737,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            4,
            132,
            392,
            9,
            137,
            394,
            139,
            12,
            527,
            528,
            657,
            146,
            665,
            667,
            30,
            415,
            671,
            32,
            672,
            34,
            40,
            41,
            42,
            44,
            45,
            46,
            47,
            51,
            55,
            56,
            57,
            185,
            315,
            61,
            66,
            71,
            73,
            74,
            75,
            77,
            79,
            211,
            85,
            86,
            91,
            93,
            96,
            98,
            100,
            101,
            103,
            104,
            236
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 489,
            "currency": "USD",
            "total": 489,
            "priceItems": [
              {
                "title": "$363 x 1 night",
                "amount": 363
              },
              {
                "title": "Airbnb service fee",
                "amount": 61
              },
              {
                "title": "Taxes",
                "amount": 65
              }
            ]
          }
        },
        {
          "id": "814091780262179069",
          "url": "https://www.airbnb.com/rooms/814091780262179069",
          "deeplink": "https://www.airbnb.com/rooms/814091780262179069?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 25,
          "name": "Hampi home for friends",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 4,
          "city": "Nimbapura",
          "images": [
            "https://a0.muscache.com/im/pictures/6781c169-2d0d-463b-99d6-784c18bb0f74.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b300c2de-baa5-49a3-b19b-354998ddd54b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/45d655c1-5800-451f-b51e-5978531f39a7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a1bb8fb1-c325-4c99-aa63-79a1862043b9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5d6dbdf3-77b9-4b3a-8395-d74a1e920f26.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2948e11d-1e5f-4fd7-b723-be4ab4a5afc7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/da727ba0-fb2d-422d-a1c0-b5708d0b69f5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7493a3cd-dca2-4a79-80ca-873109aba373.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/83bac383-0c13-4a32-9935-2423f211e0f0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e785f058-ddc6-459f-8478-eabe1576d978.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/8a0d61dd-5383-412a-ab9b-6387b0aa02ae.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.35262,
          "lng": 76.49243,
          "persons": 3,
          "reviewsCount": 2,
          "type": "Entire home",
          "userId": 465509399,
          "address": "Nimbapura, Karnataka, India",
          "amenityIds": [
            179
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 70,
            "currency": "USD",
            "total": 70,
            "priceItems": [
              {
                "title": "$54 x 1 night",
                "amount": 54
              },
              {
                "title": "Airbnb service fee",
                "amount": 9
              },
              {
                "title": "Taxes",
                "amount": 7
              }
            ]
          }
        },
        {
          "id": "37129921",
          "url": "https://www.airbnb.com/rooms/37129921",
          "deeplink": "https://www.airbnb.com/rooms/37129921?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 26,
          "name": "RMR stay 1",
          "bathrooms": 2,
          "bedrooms": 2,
          "beds": 3,
          "city": "Hosapete",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/02421eac-cc79-45c2-bbab-36f4de0b2b60.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/f50d2311-90a6-4cd5-bb53-ff21283e1663.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/c62eb2db-9861-4f5a-a048-3307f771648a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b1d5efe7-079b-403a-946a-185a99a182bf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b1d5efe7-079b-403a-946a-185a99a182bf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/bffc2f48-ffa1-481a-9163-648505e2faf0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/fe10aa3e-fbab-4cc2-b7f8-083eb19a11cb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8a2ceeef-6112-4417-b511-f5fc899f0ef2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/956832f1-2057-4a27-a5ba-9f3c8130e9d0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b5ec1642-9207-4957-a7c6-036d19dbefa2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8ffcd4a4-a4e1-46b8-9b15-c531729e5e48.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/40208a18-d849-4633-a647-b5dedbd0aa15.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/e5fd2a4f-9903-45ac-af4c-f0538551f67e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8add0023-8de5-4573-a3d1-6295f470b109.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/4344ed51-aa0b-42fd-b010-4850e16fe15f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8bfa8790-460e-4296-b9b4-150b47fb4f7e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/a690f757-6522-45c0-81a9-f90ea254452d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/c6488d76-bad0-4975-a369-f669a36b5f9e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/86b8232f-4b7b-4eb7-80ae-55add39c9f2c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b0430dd7-61dc-4cdf-899b-fdee7b28ad2d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/7e93f4c9-edb3-4575-bbbd-e16ca6dd206f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/17d65210-f750-4309-8acb-2c90fc8cb3cf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/4d2f6a2b-c535-44f8-8351-f3b5deb434d8.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.27666,
          "lng": 76.386,
          "persons": 4,
          "reviewsCount": 6,
          "rating": 3.67,
          "type": "Entire rental unit",
          "userId": 139642238,
          "address": "Hosapete, Karnataka, India",
          "amenityIds": [
            32,
            1,
            129,
            4,
            103,
            40,
            104,
            9,
            41,
            11,
            12,
            44,
            77,
            47,
            51,
            54,
            23,
            31
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 40,
            "currency": "USD",
            "total": 40,
            "priceItems": [
              {
                "title": "$36 x 1 night",
                "amount": 36
              },
              {
                "title": "Taxes",
                "amount": 4
              }
            ]
          }
        },
        {
          "id": "715584534153186171",
          "url": "https://www.airbnb.com/rooms/715584534153186171",
          "deeplink": "https://www.airbnb.com/rooms/715584534153186171?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 27,
          "name": "Bamboo cottage with own bathroom and balcony",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/9c131d1f-33e2-4620-a24e-448906d7bd96.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/123d05a4-00b0-46e0-a0d2-5f2d50e98408.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/29eaf340-770d-4f3b-82c1-7010df1b4dc1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f2fb7558-e237-49fd-abfa-0fb7a4ff091a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/13e34842-9ed3-4ebc-a38e-a1819abb1d57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a3557658-9763-4bba-99a9-fb2bb9cd26bf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66522559-8239-4e55-9bad-042345991b0a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/718bed3d-4594-45df-933d-067e21e89f59.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89e9322-a2e0-4d1b-82d5-a7f2b6a9a088.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5d79dd42-bbaf-4ae4-bd60-f81997ba023e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f5b775b-2978-4f1a-9937-d610bb7aa810.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2a528c68-f406-4a41-ac5e-8e5d5a43db46.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/be0ed552-bfe0-4718-8f0a-8b809b53be99.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c9812aa-6a04-4abb-88ca-9b158e74b36d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32ff23ac-6234-4ccf-8265-f9ddae4f6ac5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e66ec341-7bdb-414a-a196-3f42f3b6a9b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/551dde22-97f1-4a81-9248-8aaceb073363.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/5d76e557-85c1-4880-b8a9-6502cf2a4ea7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/f72de833-c926-43d4-b7ac-a8e572884b9b.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.350205002201614,
          "lng": 76.43268511381407,
          "persons": 2,
          "reviewsCount": 1,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            1,
            179,
            4,
            40,
            280,
            9,
            42,
            219,
            12,
            510
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 32,
            "currency": "USD",
            "total": 32,
            "priceItems": [
              {
                "title": "$25 x 1 night",
                "amount": 25
              },
              {
                "title": "Airbnb service fee",
                "amount": 4
              },
              {
                "title": "Taxes",
                "amount": 3
              }
            ]
          }
        },
        {
          "id": "796757894408185167",
          "url": "https://www.airbnb.com/rooms/796757894408185167",
          "deeplink": "https://www.airbnb.com/rooms/796757894408185167?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 28,
          "name": "Agri fun tent 2",
          "bathrooms": 2,
          "bedrooms": 1,
          "beds": 1,
          "city": "Gudioblapura",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/c332e632-6d71-4198-839c-409f991f6509.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/0a82711e-865f-47d1-a9aa-c20001524fab.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/5592ecac-4d23-40fb-b375-0479bb3aeaea.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/a7dc21af-c1b0-49dd-bbe2-7d0340863c35.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/01f59f2c-01af-44fb-8396-c27e8377f61f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/15e0f4df-ec0f-4f65-965b-0d224ef3a71b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/9ed3ebb3-02af-4143-bd52-b94cda70a60a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/682cd8b6-1630-4b36-aa53-6300caeca9e5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/76b5a3d3-bce5-412f-a8a0-a35e21d9e08f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/9e8c57c2-2144-4ab5-9428-ed65cea2b71b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/53f53684-95dd-43c7-86cd-96d86dfcbe57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6fd94257-6c12-4222-83eb-b4b568c3a901.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.305775642447136,
          "lng": 76.41500692683732,
          "persons": 2,
          "reviewsCount": 0,
          "type": "Private room in tent",
          "userId": 139642238,
          "address": "Gudioblapura, Karnataka, India",
          "amenityIds": [
            179,
            9,
            219
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 61,
            "currency": "USD",
            "total": 61,
            "priceItems": [
              {
                "title": "$54 x 1 night",
                "amount": 54
              },
              {
                "title": "Taxes",
                "amount": 7
              }
            ]
          }
        },
        {
          "id": "731459981571960102",
          "url": "https://www.airbnb.com/rooms/731459981571960102",
          "deeplink": "https://www.airbnb.com/rooms/731459981571960102?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 29,
          "name": "Spacious tent with mountain view",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/933c5db9-1a0a-44c0-8f3d-d1571b3f746a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/326bf40c-6e2b-4272-88e1-7be8cd6186a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26e01989-0b12-4696-9699-79e30e4db77d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/20de342c-27a5-4082-9aa3-880166b6955a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1f36b9ae-eb16-47a4-8149-6d75ffe90bf9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/035d9003-2c44-4cf5-b3ec-4813f96acd93.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/61c47d44-ec86-4d7b-90af-2377898eefcd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a207a7bf-a634-40e1-97d8-54d818690f6b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1192438e-d857-440e-9a12-305f2170dbb5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d48191a8-52a5-418d-bde7-bdfa372fd306.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-731441235960593143/original/17ca3b27-b729-4f99-8535-fa74a1a79e90.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.35067,
          "lng": 76.43159,
          "persons": 2,
          "reviewsCount": 1,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            179,
            39,
            9,
            11,
            219,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 19,
            "currency": "USD",
            "total": 19,
            "priceItems": [
              {
                "title": "$15 x 1 night",
                "amount": 15
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 2
              }
            ]
          }
        },
        {
          "id": "713598527143341928",
          "url": "https://www.airbnb.com/rooms/713598527143341928",
          "deeplink": "https://www.airbnb.com/rooms/713598527143341928?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 30,
          "name": "Bamboo cottages with own bathroom and balcony",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/9b5b2eed-c0bf-46e9-93a9-44d92a40b6b0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/9c131d1f-33e2-4620-a24e-448906d7bd96.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/123d05a4-00b0-46e0-a0d2-5f2d50e98408.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/29eaf340-770d-4f3b-82c1-7010df1b4dc1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f2fb7558-e237-49fd-abfa-0fb7a4ff091a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/13e34842-9ed3-4ebc-a38e-a1819abb1d57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a3557658-9763-4bba-99a9-fb2bb9cd26bf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66522559-8239-4e55-9bad-042345991b0a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/718bed3d-4594-45df-933d-067e21e89f59.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89e9322-a2e0-4d1b-82d5-a7f2b6a9a088.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5d79dd42-bbaf-4ae4-bd60-f81997ba023e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f5b775b-2978-4f1a-9937-d610bb7aa810.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2a528c68-f406-4a41-ac5e-8e5d5a43db46.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/be0ed552-bfe0-4718-8f0a-8b809b53be99.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c9812aa-6a04-4abb-88ca-9b158e74b36d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32ff23ac-6234-4ccf-8265-f9ddae4f6ac5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e66ec341-7bdb-414a-a196-3f42f3b6a9b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/cd1109bf-6d4b-43a9-8def-c7b28fc9985d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/6412b743-c280-476c-9880-6ce426176178.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.350268603161718,
          "lng": 76.4328895881772,
          "persons": 2,
          "reviewsCount": 0,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            4,
            100,
            85,
            40,
            9,
            42,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 32,
            "currency": "USD",
            "total": 32,
            "priceItems": [
              {
                "title": "$25 x 1 night",
                "amount": 25
              },
              {
                "title": "Airbnb service fee",
                "amount": 4
              },
              {
                "title": "Taxes",
                "amount": 3
              }
            ]
          }
        },
        {
          "id": "713610952665036978",
          "url": "https://www.airbnb.com/rooms/713610952665036978",
          "deeplink": "https://www.airbnb.com/rooms/713610952665036978?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 31,
          "name": "Bamboo cottage with own bathroom and balcony",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/9c131d1f-33e2-4620-a24e-448906d7bd96.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/123d05a4-00b0-46e0-a0d2-5f2d50e98408.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/29eaf340-770d-4f3b-82c1-7010df1b4dc1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f2fb7558-e237-49fd-abfa-0fb7a4ff091a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/13e34842-9ed3-4ebc-a38e-a1819abb1d57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a3557658-9763-4bba-99a9-fb2bb9cd26bf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66522559-8239-4e55-9bad-042345991b0a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/718bed3d-4594-45df-933d-067e21e89f59.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b89e9322-a2e0-4d1b-82d5-a7f2b6a9a088.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5d79dd42-bbaf-4ae4-bd60-f81997ba023e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f5b775b-2978-4f1a-9937-d610bb7aa810.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2a528c68-f406-4a41-ac5e-8e5d5a43db46.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/be0ed552-bfe0-4718-8f0a-8b809b53be99.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c9812aa-6a04-4abb-88ca-9b158e74b36d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32ff23ac-6234-4ccf-8265-f9ddae4f6ac5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e66ec341-7bdb-414a-a196-3f42f3b6a9b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/551dde22-97f1-4a81-9248-8aaceb073363.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/5d76e557-85c1-4880-b8a9-6502cf2a4ea7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/f72de833-c926-43d4-b7ac-a8e572884b9b.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.3502614902243,
          "lng": 76.43289763480425,
          "persons": 2,
          "reviewsCount": 0,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            4,
            40,
            9,
            42,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 32,
            "currency": "USD",
            "total": 32,
            "priceItems": [
              {
                "title": "$25 x 1 night",
                "amount": 25
              },
              {
                "title": "Airbnb service fee",
                "amount": 4
              },
              {
                "title": "Taxes",
                "amount": 3
              }
            ]
          }
        },
        {
          "id": "731470293698655589",
          "url": "https://www.airbnb.com/rooms/731470293698655589",
          "deeplink": "https://www.airbnb.com/rooms/731470293698655589?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 32,
          "name": "Spacious tent with mountain view",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/1f36b9ae-eb16-47a4-8149-6d75ffe90bf9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/933c5db9-1a0a-44c0-8f3d-d1571b3f746a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/326bf40c-6e2b-4272-88e1-7be8cd6186a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26e01989-0b12-4696-9699-79e30e4db77d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/20de342c-27a5-4082-9aa3-880166b6955a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/035d9003-2c44-4cf5-b3ec-4813f96acd93.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/61c47d44-ec86-4d7b-90af-2377898eefcd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a207a7bf-a634-40e1-97d8-54d818690f6b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1192438e-d857-440e-9a12-305f2170dbb5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d48191a8-52a5-418d-bde7-bdfa372fd306.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-731441235960593143/original/17ca3b27-b729-4f99-8535-fa74a1a79e90.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.34969,
          "lng": 76.43201,
          "persons": 2,
          "reviewsCount": 1,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            179,
            9,
            219
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 19,
            "currency": "USD",
            "total": 19,
            "priceItems": [
              {
                "title": "$15 x 1 night",
                "amount": 15
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 2
              }
            ]
          }
        },
        {
          "id": "731467650465543095",
          "url": "https://www.airbnb.com/rooms/731467650465543095",
          "deeplink": "https://www.airbnb.com/rooms/731467650465543095?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 33,
          "name": "Spacious tent with mountain view",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/1f36b9ae-eb16-47a4-8149-6d75ffe90bf9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/933c5db9-1a0a-44c0-8f3d-d1571b3f746a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/326bf40c-6e2b-4272-88e1-7be8cd6186a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26e01989-0b12-4696-9699-79e30e4db77d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/20de342c-27a5-4082-9aa3-880166b6955a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/035d9003-2c44-4cf5-b3ec-4813f96acd93.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/61c47d44-ec86-4d7b-90af-2377898eefcd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a207a7bf-a634-40e1-97d8-54d818690f6b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1192438e-d857-440e-9a12-305f2170dbb5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d48191a8-52a5-418d-bde7-bdfa372fd306.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-731441235960593143/original/17ca3b27-b729-4f99-8535-fa74a1a79e90.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.35128,
          "lng": 76.4338,
          "persons": 2,
          "reviewsCount": 0,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            179,
            39,
            9,
            11,
            219,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 19,
            "currency": "USD",
            "total": 19,
            "priceItems": [
              {
                "title": "$15 x 1 night",
                "amount": 15
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 2
              }
            ]
          }
        },
        {
          "id": "731441235960593143",
          "url": "https://www.airbnb.com/rooms/731441235960593143",
          "deeplink": "https://www.airbnb.com/rooms/731441235960593143?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 34,
          "name": "Spacious tent with mountain view",
          "bathrooms": 1.5,
          "bedrooms": 1,
          "beds": 1,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/933c5db9-1a0a-44c0-8f3d-d1571b3f746a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/326bf40c-6e2b-4272-88e1-7be8cd6186a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26e01989-0b12-4696-9699-79e30e4db77d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/20de342c-27a5-4082-9aa3-880166b6955a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1f36b9ae-eb16-47a4-8149-6d75ffe90bf9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/035d9003-2c44-4cf5-b3ec-4813f96acd93.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/61c47d44-ec86-4d7b-90af-2377898eefcd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a207a7bf-a634-40e1-97d8-54d818690f6b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1192438e-d857-440e-9a12-305f2170dbb5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d48191a8-52a5-418d-bde7-bdfa372fd306.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-731441235960593143/original/17ca3b27-b729-4f99-8535-fa74a1a79e90.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.350439258802759,
          "lng": 76.43281302487122,
          "persons": 2,
          "reviewsCount": 1,
          "type": "Private room in nature lodge",
          "userId": 434603321,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            179,
            39,
            9,
            11,
            219,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 19,
            "currency": "USD",
            "total": 19,
            "priceItems": [
              {
                "title": "$15 x 1 night",
                "amount": 15
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 2
              }
            ]
          }
        },
        {
          "id": "33182298",
          "url": "https://www.airbnb.com/rooms/33182298",
          "deeplink": "https://www.airbnb.com/rooms/33182298?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 35,
          "name": "Cottages near Anjinadrihill, Sanapur Lake. SM",
          "bathrooms": 2,
          "bedrooms": 4,
          "beds": 4,
          "city": "Hanumanahalli",
          "images": [
            "https://a0.muscache.com/im/pictures/9df1ede9-1eda-4857-b6c7-0fe6cd0525d8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6406a832-1a46-4dcf-a587-684dbcda70e0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e1b42bd9-36d0-474b-99ab-47877e213e9a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f396c031-41cf-4fda-83ee-8de39fc4cadb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9bfe21aa-a481-40f0-b088-e91389b70fb2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/543be3ef-ecb9-4e31-a62c-5517602ba5f1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f55bbfe4-bf5b-4e6a-a3ad-124c41ed6956.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f189041a-99fd-4fd4-9c3b-fa22e488bb7b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e0d5b5f2-6780-466e-881f-e81f27a925b0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5a030ee7-ad2b-491c-967c-eb2c657f7749.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1710e796-a601-4aba-8283-262dbcb08ea6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2cd75cf7-bee8-4843-a447-b4d003c2812f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6f045517-78d9-427a-a0bc-800e28c3e6cd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c0294539-befc-4916-b73d-0f995e686354.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/55f750d6-99ab-498c-8fae-e2b1d44c2452.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b54f0a02-155d-4bb8-a675-07250c4dd6c2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/35cc79ab-8c70-4c0a-90d8-9cb9b71962fe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fbe53005-a676-4981-8c74-84606236d100.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7dc04ade-0a69-4762-a773-9c6559a46a4a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5e0b1f86-b965-4f1e-b92d-cd6691f3725c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/523a37cf-ae87-4d5e-a1ac-35645591a86f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b595a7f1-f7ff-4925-99f0-e70aea245a6d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fbf25975-0f32-463e-8513-11bfec03f6c6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6e9c1a34-d294-4427-a38f-ae7f1fc2fe42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/41f5ed1e-cacc-4ba2-8839-94f789c197fb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a82cf7cd-25e1-42f2-8854-2ecf29553ebe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/91893858-a8d4-468f-9f72-5136408770c0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48f40f32-ee2f-47cf-9f6d-f5c87134e0cf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7c3aff56-3f65-438b-8bf8-945026d70813.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c493ba64-ecc3-4bc8-807b-90ce399755ae.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.34912,
          "lng": 76.46631,
          "persons": 8,
          "reviewsCount": 6,
          "rating": 3.5,
          "type": "Private room in nature lodge",
          "userId": 226713108,
          "address": "Hanumanahalli, Karnataka, India",
          "amenityIds": [
            101,
            133,
            9,
            57,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 14,
            "currency": "USD",
            "total": 14,
            "priceItems": [
              {
                "title": "$11 x 1 night",
                "amount": 11
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "803291608165858271",
          "url": "https://www.airbnb.com/rooms/803291608165858271",
          "deeplink": "https://www.airbnb.com/rooms/803291608165858271?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 36,
          "name": "Camping Tents at Anjinadrihill, Sanapur Lake. HFR",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 2,
          "city": "Virupapuragaddi",
          "images": [
            "https://a0.muscache.com/im/pictures/0b48ba47-2a15-41c3-bea2-7e18182183ea.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/af233911-5713-4119-996c-9eca5ed5ea64.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cc4615ed-6a8e-4a1a-b47b-d7a9c6585f65.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/716a7ef2-abc4-45ab-823c-02b867813f85.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/691d973b-eb23-4b3d-a8cd-6e3aa7e2dfb5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2e8fc783-e7c0-4318-a376-efecaf3c41a5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/12369c4c-c0f0-4805-9415-669441fcc95e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0d4741b9-c579-42a5-993f-3db21d791b16.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/28a4f32f-fb2b-45ad-a24e-d9babdd7fd24.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3aa9b274-c09b-41f2-9198-b3a89ad23c2e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/aa1ff8e9-1dc0-449c-9156-45c8e4a8c403.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b9a1e1fc-3d84-4d04-8478-63a109084036.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b1209ae0-937e-45c6-9596-476014540f42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/85ab1d92-6566-4f3d-af10-14c86991d615.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3f34c094-dcf2-448e-b285-fea4941781e0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6d173bdc-5cba-428f-8eb1-62886d211359.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.34297,
          "lng": 76.47013,
          "persons": 2,
          "reviewsCount": 0,
          "type": "Private room in guesthouse",
          "userId": 226713108,
          "address": "Virupapuragaddi, Karnataka, India",
          "amenityIds": [
            32,
            4,
            40,
            9,
            11,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 13,
            "currency": "USD",
            "total": 13,
            "priceItems": [
              {
                "title": "$10 x 1 night",
                "amount": 10
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "31825970",
          "url": "https://www.airbnb.com/rooms/31825970",
          "deeplink": "https://www.airbnb.com/rooms/31825970?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 37,
          "name": "Cottages near Anjinadrihill, Sanapur Lake. SR",
          "bathrooms": 1,
          "bedrooms": 8,
          "beds": 4,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/e6ac5f2b-3f52-4001-a2e6-658d2cff696d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/05b067fc-c19a-49c4-9f60-a8065ae96145.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/091bc407-99e8-40d7-83df-845c119d9745.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66ed36e1-dce5-4532-b4e5-87778d471f99.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/57774e68-402f-4197-9b67-7caa7858dc6e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b5570c8c-103b-44a8-99dd-23b3c61179b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7ba7a124-ae86-440b-a72f-fb0f4ce7d16f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b3359af9-a6a0-4e82-a36a-5ddcfa26261e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e16f6304-3e13-4d09-bf1f-d8c8689e7559.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/693e43e1-c483-499e-944b-60f456019642.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c47096b9-b355-46d0-8087-38f505b97756.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b977f24f-3ef9-4824-b293-bd4bc4c31a26.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9f34fd27-65a2-4bf0-9839-44d54e2ca489.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fd71809f-aac2-45bd-9873-f24908447e4c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/189da7fb-0d2a-4e42-a6f6-26740f6041a4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/262dc77e-d259-4f78-9a27-fc631a912f91.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24d3abf7-b1ff-45f0-9797-d886c4f45a28.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48cc1f77-7739-4b38-9ad6-802c54d3ea68.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/207390b2-fcc9-4915-b8b8-8287ca893c9c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1c835c85-01d8-431c-acbf-804d9bdc609d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/44d2cabf-d0fe-44c9-ac42-49816c7bf561.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/00bbb1e7-2488-4356-b20a-d5aab35211b8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9c96972d-307f-403f-8e30-da4e13e94ebd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1d259b35-85f1-433d-9c28-b9ef1f076a94.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.35643,
          "lng": 76.44508,
          "persons": 8,
          "reviewsCount": 3,
          "rating": 2.67,
          "type": "Private room in guesthouse",
          "userId": 226713108,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            32,
            4,
            40,
            56,
            9,
            11,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 13,
            "currency": "USD",
            "total": 13,
            "priceItems": [
              {
                "title": "$10 x 1 night",
                "amount": 10
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "33437391",
          "url": "https://www.airbnb.com/rooms/33437391",
          "deeplink": "https://www.airbnb.com/rooms/33437391?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 38,
          "name": "Camping Tents near Anjinadrihill, Sanapur Lake. SR",
          "bathrooms": 1,
          "bedrooms": 8,
          "beds": 4,
          "city": "Sanapur",
          "images": [
            "https://a0.muscache.com/im/pictures/d959f016-cb4c-4c08-a4b6-e9567e85e349.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/96904b31-c1ec-4af5-addf-564261525019.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d7bfa01a-7729-4b5c-9aa7-120ed88c12dc.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7fcb683e-98c0-4ff2-a4fd-341b559d0080.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/85eddba8-0874-4bf0-b0c3-7b077596b259.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b977f24f-3ef9-4824-b293-bd4bc4c31a26.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9f34fd27-65a2-4bf0-9839-44d54e2ca489.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/189da7fb-0d2a-4e42-a6f6-26740f6041a4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/74528902-0817-4018-9a09-3332a2769141.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/16cf467d-9763-44e7-a002-3a99fce77f45.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/44d2cabf-d0fe-44c9-ac42-49816c7bf561.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48cc1f77-7739-4b38-9ad6-802c54d3ea68.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1c835c85-01d8-431c-acbf-804d9bdc609d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7ec5b62a-5cee-4cf8-bf18-444e7579eade.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/00bbb1e7-2488-4356-b20a-d5aab35211b8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fa70842f-272a-4854-be8d-e9518cb346cf.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.34784,
          "lng": 76.45316,
          "persons": 8,
          "reviewsCount": 0,
          "type": "Private room in nature lodge",
          "userId": 226713108,
          "address": "Sanapur, Karnataka, India",
          "amenityIds": [
            32,
            4,
            40,
            56,
            9,
            11,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 13,
            "currency": "USD",
            "total": 13,
            "priceItems": [
              {
                "title": "$10 x 1 night",
                "amount": 10
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        },
        {
          "id": "31814828",
          "url": "https://www.airbnb.com/rooms/31814828",
          "deeplink": "https://www.airbnb.com/rooms/31814828?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 39,
          "name": "Baba Cafe, Cottages, Anjinadrihill, Sanapur Lake.",
          "bathrooms": 2,
          "bedrooms": 4,
          "beds": 4,
          "city": "",
          "images": [
            "https://a0.muscache.com/im/pictures/7f41440c-e060-4599-8294-4b0192b6ad09.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ceb397e0-90cb-4895-bd4f-e09cb994addb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15ca20e1-1409-4158-8662-f78032e48623.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/73e992f1-bbe2-4b57-812d-ea9985b7cd81.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7f4c3189-ddc7-43b3-9b4b-e50a979d6470.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/831e54e9-9a11-454b-81f2-36c1c04c1b59.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3da46261-f55a-42be-95b8-a782e6d21e3e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5a1fee28-41c3-419f-a8a3-2ed52e6df2c1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9c564ed0-36ef-47cd-adc7-0a27fc68fabf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f1f20de2-c7a1-424a-ae3e-0f9c196e6db6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0868faf1-607c-4e81-81a0-3635a6d93fdb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d8390fa5-c052-400e-8ec7-59edc367fb06.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a052ada1-82e1-45e0-bbb3-1333871dcebe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c9ad2357-7c82-49f0-a3c5-2a71a2232313.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/25f9f35a-2765-432c-bb01-8816986570b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48853702-a262-4044-b98e-9d613bfcbe8a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e2a3a4d6-2a6e-4f94-bb19-6d73ea64f01b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/aa979051-67c5-47f6-8723-9b5d0a7aaca6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c69c3bd0-f9ba-4d22-a102-d88687719d04.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6553b51d-f5e6-4ca6-8feb-5b07ba7d1b10.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e2706d85-25a8-41e3-93e3-cb7fec7b3d8b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5ade7bb6-8289-4b49-82cc-b066ed1a5cf3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/46185829-2d39-446c-81d5-62def8e91813.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7949d179-57c8-4a58-a207-9959e5ecf1ae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5829a008-35d8-4557-9a6e-5de438cb81d1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e69a7b03-c8e0-4a7a-9af0-6ccbf2ae7417.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/382bf25c-5416-4ae6-8221-c67520b1cfb6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4ac9593d-ab89-40dc-bda9-4c62b038150e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8ce98dfd-0110-418b-a9d5-dbe5fb3b66d8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b1ecda1d-aa5a-4e25-adae-48dd562fc681.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.3545,
          "lng": 76.47064,
          "persons": 8,
          "reviewsCount": 4,
          "rating": 3,
          "type": "Room in nature lodge",
          "userId": 226713108,
          "address": "IN, India",
          "amenityIds": [
            32,
            4,
            9,
            11,
            12,
            93
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 14,
            "currency": "USD",
            "total": 14,
            "priceItems": [
              {
                "title": "$12 x 1 night",
                "amount": 12
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              }
            ]
          }
        },
        {
          "id": "33438748",
          "url": "https://www.airbnb.com/rooms/33438748",
          "deeplink": "https://www.airbnb.com/rooms/33438748?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
          "position": 40,
          "name": "Camping Tents near Anjinadrihill, Sanapur Lake. SM",
          "bathrooms": 2,
          "bedrooms": 4,
          "beds": 4,
          "city": "Anegundi",
          "images": [
            "https://a0.muscache.com/im/pictures/f9dd44c4-348b-4669-953e-46591c125a21.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/46737adb-fe07-4adc-b5ba-3f173873ff15.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6e9c1a34-d294-4427-a38f-ae7f1fc2fe42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f189041a-99fd-4fd4-9c3b-fa22e488bb7b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5a030ee7-ad2b-491c-967c-eb2c657f7749.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2cd75cf7-bee8-4843-a447-b4d003c2812f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/97ef69b2-f3c3-4960-ad74-ff577ccd9e8e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7dc04ade-0a69-4762-a773-9c6559a46a4a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a82cf7cd-25e1-42f2-8854-2ecf29553ebe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9fac216c-7b65-40d3-8ce9-a4dda5e13ff2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cc9441d6-309b-4ac6-93d7-77e9a1f775c8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/48f40f32-ee2f-47cf-9f6d-f5c87134e0cf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6d9076fd-bbdb-4918-b822-eb52351c1403.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9b36a768-eb1a-497d-807d-310cf077394e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fbe53005-a676-4981-8c74-84606236d100.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/16728bee-3e4c-4d3c-968f-1fabdc89a289.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7c3aff56-3f65-438b-8bf8-945026d70813.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6626598e-4e9f-4786-bde3-2e27d8c18fd0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c493ba64-ecc3-4bc8-807b-90ce399755ae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/baa66f09-6cec-43b1-ab3b-b3c9cd3b41a1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f6da406-d604-4e1c-abab-978383ec8c40.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/62485393-42e2-4540-83a2-37db0f50b772.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/61a007c9-562b-450c-9c3c-5350d385e76c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f627058c-20ab-4648-be05-a27f8ac956d0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a2646bd9-e9f2-436c-84af-858e238046d3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/af2bb27f-79d6-43a8-9c2d-ce13bce9c158.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/071836d0-0799-4a10-976e-decb5555e3ea.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b6338587-bc3a-42e3-9f00-95b3893850fb.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 15.34945,
          "lng": 76.46671,
          "persons": 8,
          "reviewsCount": 1,
          "type": "Private room in tent",
          "userId": 226713108,
          "address": "Anegundi, Karnataka, India",
          "amenityIds": [
            133,
            9,
            57,
            12
          ],
          "previewAmenities": [],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 13,
            "currency": "USD",
            "total": 13,
            "priceItems": [
              {
                "title": "$10 x 1 night",
                "amount": 10
              },
              {
                "title": "Airbnb service fee",
                "amount": 2
              },
              {
                "title": "Taxes",
                "amount": 1
              }
            ]
          }
        }
      ]
      console.log(dt)
      getCards(dt);
    function getCards(data){
        const room_container=document.querySelector(".left-col");
        const n=data.length;
        let p=document.createElement("p");
        p.innerText=`${n}+ stays in ${data[0].city}`
        room_container.appendChild(p);
        for (let room=0;room<n/2;room++){
            const house=document.createElement("div");
            house.setAttribute("class","house");
            house.innerHTML=`
            <div class="house-img">
                        <a href="house.html"><img src="${data[room].images[0]}" alt=""></a>
                    </div>
                    <div class="house-info">
                        <div class="house-title">
                            <p>${data[room].name}</p>
                            <h3>${data[room].type}</h3>
                        </div>
                        <i class="ri-heart-line"></i>
                        <div class="house-offerings">
                            <p id="offering">${data[room].persons} guests · Entire Home · ${data[room].beds} beds · ${data[room].bathrooms} bath</p>
                        <p>none</p>
                        </div>
                        <p id="house-rating">${data[room].rating} <i class="ri-star-fill"></i> (${data[room].reviewsCount} reviews)</p>
                        <div class="house-price">
                            <h4>${data[room].price.currency} ${data[room].price.rate}<span>/ night</span></h4>
                        </div>
                    </div>
            `;
            const house_title=house.querySelector(".house-title")
            const btn=document.createElement("button");
            btn.innerText='cost breakdown'
            // const id=String.fromCharCode(i+65)
           btn.addEventListener("click",()=>{CostBreak(data[room])});
          house_title.appendChild(btn);
            map_details.push({latitude:data[room].lat,lagtitude:data[room].lng,});
            room_container.appendChild(house);
        }
    }
    
    function CostBreak(listing,id) {
        // Calculate additional fees and total cost
        const additionalFees = listing.price * 0.10; // Assuming additional fees are 10% of base price
        const totalCost = listing.price + additionalFees;
    
        // Create a modal dialog box
        const modal = document.createElement("div");
        modal.setAttribute("id",id);
        modal.style.display = "block";
        modal.style.width = "300px";
        modal.style.height = "200px";
        modal.style.backgroundColor = "#fff";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.padding = "20px";
        modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    
        // Add booking cost breakdown to the modal
        let fees=0;
        
        for(let i=1;i<listing.price.priceItems.length;i++){
          if(listing.price.priceItems[i]){
            fees+=listing.price.priceItems[i].amount;
          }
        }
        modal.innerHTML = `
            <h2>Booking Cost Breakdown</h2>
            <p>Base Rate: ${listing.price.priceItems[0].amount}</p>
            <p>Additional Fees: ${fees}</p>
            <p>Total Cost: ${listing.price.rate}</p>
        `;
        
        // Add a close button to the modal
        const closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.addEventListener("click", () => modal.style.display = "none");
        modal.appendChild(closeButton);
    
        // Add the modal to the body
        document.body.appendChild(modal);
    }
    
    getDetails(storedLocation, storedCheckIn, storedCheckOut, storedGuest);
    // if(data){
    //     getCards(data);
    // }
    
    // map locatoins

    // function initMap() {
    //     // Specify the initial center and zoom level
    //     const mapOptions = {
    //         center: { lat: 15.284141483588382, lng: 76.42459504388843 }, // Replace with your desired coordinates
    //         zoom: 10, // Adjust the zoom level as needed
    //     };

    //     // Create a new map instance
    //     const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //     // You can add markers, polygons, or other map features here
    //     // For example, to add a marker:
    //     const marker = new google.maps.Marker({
    //         position: { lat: 0, lng: 0 }, // Replace with marker coordinates
    //         map: map,
    //         title: 'Marker Title', // Replace with marker title
    //     });
    // }
