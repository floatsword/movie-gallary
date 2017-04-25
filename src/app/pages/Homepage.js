import React, { Component } from 'react';
import MgHeader from '../components/MgHeader';
import MgRow from '../components/MgRow';

const Titles = [
  { title: '正在热映的电影' },
  { title: '即将上映的电影' },
  { title: '豆瓣电影Top250' }
]

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {Titles.map((item, index) => {
          return <MgRow key={index} title={item.title}/>
        })}
      </div>
    )
  }
}
