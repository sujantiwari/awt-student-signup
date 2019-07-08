import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        ProjectInfos:[]
      },
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.getData(id);
  }
  getData(id){
    var link = 'http://localhost:9000/category/'+id +'/projects';
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({ category: data });
      });
  }
  componentDidUpdate(prevProps) {
    const { match: { params: { id } } } = this.props;
    if (prevProps.match.params.id !== id){
      this.getData(this.props.match.params.id)
    }
  }
  render() {
    var {category}  = this.state;
    console.log(category);
    return (
        <div>
        <h2>{category.CategoryName}</h2>
        <p className="text-justify" />
        <br />
        {category.CategoryDescription}
        <h3>Projects in {category.CategoryName}</h3>
        <ul className="thelinks">
          {category.ProjectInfos.map((project, index) =>
          <li key={index} ><Link to={'/project/'+project.ProjectId} className="link"> {project.ProjectName} </Link></li>
          )}
        </ul>
        </div>
    );
  }
}

export default Category;
