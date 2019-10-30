import React, { Component } from "react";
import MenueItem from "../menu-item/MenuItem";

import "./directory.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "monitors",
          imageUrl:
            "https://backend.techstoreltd.com/Uploads/Photo/MO00307_1.jpg",
          id: 1,
          linkUrl: "shop/monitors"
        },
        {
          title: "phones",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhXbJHdZSqGzO5ZqVS2-mfwLd0Ny2JC9vTaf7m_JAIdi3kKSJdA&s",
          id: 2,
          linkUrl: "shop/phones"
        },
        {
          title: "drones",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoe5RVyozly2rg77OLhXUUnUs5fTI9VejqgB41IBZENNcc0WBR&s",
          id: 3,
          linkUrl: "shop/drones"
        },
        {
          title: "printers",
          imageUrl:
            "https://www.costco.co.uk/medias/sys_master/products/h01/h01/10123080597534.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/printers"
        },
        {
          title: "watches",
          imageUrl:
            "https://n4.sdlcdn.com/imgs/i/g/x/orion-nk1580YL05j-Leather-Analog-Men-SDL869907918-1-e6950.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/multimedia"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, imageUrl, id, size }) => {
          return (
            <MenueItem key={id} title={title} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
