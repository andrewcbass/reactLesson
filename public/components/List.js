import React from "react";

class List extends React.Component {
  render() {
    const Component = this.props.component;
    return (
      <div>
        <ul>
          {this.props.items.map(item => <Component key={item.id} {...item} />)}
        </ul>
      </div>
    );
  }
};

export default List;
