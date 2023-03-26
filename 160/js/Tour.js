AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createPlace()
    },
  
    createPlace: function () {
      const Place = [
        {
          id: "spider-man",
          title: "Spider Man",
          url: "./assets/img1.jpg",
        },
        {
          id: "marvel",
          title: "Marvel",
          url: "./assets/img2.jpg",
        },
  
        {
          id: "endgame",
          title: "Endgame",
          url: "./assets/img3.jpg",
        },
        {
          id: "superheroes",
          title: "Super Heroes",
          url: "./assets/img4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of Place) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
    
        const border=this.createBorder(position,item.id)
    
       const place=this.createPlace(item)
       border.appendChild(place)
    
        const title=this.createTitle(position,item)
        border.appendChild(title)
  
        this.placesContainer.appendChild(border);
      }
    },
    createBorder:function(position,id){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("id",id)
      entityE1.setAttribute("visible",true)
      entityE1.setAttribute("geometry",{
        primitive:"ring",
        radiusInner:10,
        radiusOuter:15
      })
      entityE1.setAttribute("position",position)
      entityE1.setAttribute("material",{
        color:"#a4e139",
        opacity:0.5
      })
      return entityE1
    },
    createPlaces:function(item){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("visible",true)
      entityE1.setAttribute("geometry",{
        primitive:"circle",
        radius:15
      })
      entityE1.setAttribute("material",{
        src:item.url
      })
      return entityE1
    },
    createTitle:function(position,item){
      const entityE1=document.createElement("a-entity")
      entityE1.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:60,
        color:"black",
        value:item.title
      })
      const elPosition=position
      elPosition.y=-20
      entityE1.setAttribute("position",elPosition)
      entityE1.setAttribute("visible",true)
      return entityE1
  
    }
  });
  