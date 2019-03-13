import React, { Component } from 'react';
import { Good_ar } from './Good_ar'; /* Goods array for the task */
import { Good } from './Good';

/* 
* List of many goods
*/ 
class GoodsMany extends Component {
  render() 
  {
    // map to array of goods
    const Goods_ar_html = 
      Good_ar.map(item => <Good key={item.key.toString()} good_slog={item.good_slog} 
      good_name={item.good_name} with_content={item.with_content} with_addit={item.with_addit} 
      wt_value={item.wt_value} good_under={item.good_under} active={item.active}/>)
    
    return (
        <div>
            {Goods_ar_html}
        </div>
    )
  }
}

/*
* Show block (list of goods) with heading
*/
class App extends Component {
  render() 
  {
    return (
        <div className="wrap">
          <div className="question">Ты сегодня покормил кота ?</div>
          { <GoodsMany /> }
        </div>
    );
  }
}

export default App;