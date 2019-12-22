import React, { Component } from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div id = "Menu">
                <div class = "department-select-tab">
                    <select>
                        <option>Chi nhánh 1</option>
                        <option>Chi nhánh 2</option>
                        <option>Chi nhánh 3</option>
                    </select>
                </div>
                <div class = "test">
                    <div class = "left">
                        <div><button>Khai Vị</button></div>
                        <div><button>Món chính</button></div>
                        <div><button>Tráng miệng</button></div>
                        <div><button>Theo ngày</button></div>
                    </div>
                    <div class = "right">
                        <div class = "column">
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="123"
                                price="123"
                            />
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="234"
                                price="5234533"
                            />
                        </div>
                        <div class = "column">
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="123"
                                price="123"
                            />
                            <MenuItem
                                image={process.env.PUBLIC_URL + '/Image/newdish1.jpg'}
                                dishName="234"
                                price="5234533"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;