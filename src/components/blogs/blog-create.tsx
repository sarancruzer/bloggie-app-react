import React from "react";
import ReactQuill, {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import "./blog.css";
// import { ImageResize } from 'quill-image-resize-module';
// import ImageResize from 'quill-image-resize-module'
// import { ImageResize } from 'quill-image-resize-module';

// Quill.register('modules/imageResize', ImageResize);


interface IProps {
  history: any
};

interface IState {
  text: string
};
export class BlogCreate extends React.Component<IProps, IState> {

 constructor(props: IProps) {
  super(props)
  this.state = { text: 'asdfasdf' } // You can also pass a Quill Delta here

  this.handleChange = this.handleChange.bind(this)

 }

  handleChange = (value: string) => {
  console.log("🚀 ~ file: blog-create.tsx ~ line 12 ~ handleChange ~ value", value)
  this.setState({ text: value })
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
 
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  render() {

  

    return (
      <>   
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
             

              <div className="row d-flex justify-content-center">
                <div className="col-xl-10">
                  <div className="card ">
                    <div className="card-body">
                     

                    <ReactQuill value={this.state.text} theme="snow"
                    modules={this.modules}
                    formats={this.formats} onChange={this.handleChange} />
                    
                  </div>
                </div>
                </div>

          </div>

         
        </div>  
        </div>
        </div>

        
      </>
    );
  }

}

