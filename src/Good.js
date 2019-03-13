import React from 'react';

/*
* "Good" component
* Prints 1 good
*/
export class Good extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      selected: false
    };
  }
 
  /* Good is clicked by mouse */
  clicked()
  {
      //console.log("Clicked P) "+this.props.with_content);

      // not active good can't be selected
      if (!this.state.active)
        return;

      const currentSel = this.state.selected;
      this.setState({ selected: !currentSel});
  }

  render() {
      let mcardClass = this.state.active ? 'mini-card' : 'mini-card gray';

      // pink class if selected
      if (this.state.selected)
        mcardClass += " pink";

    return (<div className={mcardClass} onClick={this.clicked.bind(this)}> 
      <div className="good_slog">{this.props.good_slog}</div>
      <div className="good_name">{this.props.good_name}</div>
      <div className="with_content">{this.props.with_content}</div>
      <div className="with_addit" dangerouslySetInnerHTML={{ __html: this.props.with_addit }}></div>
      <div className="good_image"><img src="img/cat.png" alt="" /></div>
      <div className="good_wt">
        <div className="wt_value">{this.props.wt_value}</div>
        <div className="wt_mass">кг</div>
      </div>
      <div className="good_under" dangerouslySetInnerHTML={{ __html: this.props.good_under }}></div>
    </div>);
  }
}
