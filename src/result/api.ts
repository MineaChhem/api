
// export function api(){
    // fetch('https://soulsbend168.xyz/api/v1/gameresultlist')
    //     .then(res => res.json())
    //     .then(data => log(data))

// const api = 'https://soulsbend168.xyz/api/v1/gameresultlist'

// const file = { tableID: "5" };

//         fetch(api, {
//             method: 'POST', // or 'PUT'
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(file),
//           })
//             .then((res) => res.json())
//             .then((file) => {
//               log(JSON.stringify(file.data.x))
//               log(JSON.parse(file.data.x))
//               let result = JSON.parse(file.data.x)
//               log(result['winner'])
//             }
//             )

//             .catch((error) => {
//               error('Error:', error);
//             });
// }

export function result(){
  const api = 'https://soulsbend168.xyz/api/v1/gameresultlist'
  const file = { tableID: "5" };

  const gg = async () => {
    try {
      log('working')
      const res = await fetch(api, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(file),
      })
      const data = await res.json()
      const getData = await JSON.parse(data.data.x)
      log(getData)
      let {
        winner,
        tableID,
        
      } = getData
      log(winner)
    } catch (error) {
        log('Error:', error);
    }
  }

  const box = new Entity()
  engine.addEntity(box)

  box.addComponent(new BoxShape())
  box.addComponent(new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1 , 1, 1)
  }))

  box.addComponent(new OnClick(
    ()=>{
      gg()
    }
  ))
}