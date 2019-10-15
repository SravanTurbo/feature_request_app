
    import React, { Component } from "react";
    import FeatureModal from "./components/FeatureModal";
    import ClientModal from "./components/ClientModal";
    import ProductModal from "./components/ProductModal";
    import { Nav, NavItem, NavLink, Table } from 'reactstrap';
    import classnames from 'classnames';
    import {handleDelete, handleSubmit, refreshList} from './actions.js'

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          modal: false,
          viewCompleted: false,
          activeTab: "1",
          context: "Feature",
          activeItem: {},
          requestList: [],
          clientList: [],
          productList: []
        };
      }

      componentDidMount = async () => {
        let result = await refreshList();
        console.log(result)
        this.setState({requestList: result[0]&&result[0].data?result[0].data:[],
        clientList: result[1]&&result[1].data?result[1].data:[],
        productList: result[2]&&result[2].data?result[2].data:[]})
      }

      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };

      handleToggle = tab => {
        if(this.state.activeTab !== tab){
          this.setState({activeTab: tab})
          this.setState({context: tab==='1' ? "Feature" : tab ==='2' ? "Client" : "Product Area"})
        }
      }

      createItem = () => {
        if(this.state.activeTab ==='1'){
          const item = {
            title: "",
            description: "",
            client: "",
            client_priority: "",
            target_date: "",
            product_area: ""
           };
          this.setState({ activeItem: item, modal: !this.state.modal });
        }else  {
            const item = { name: "" };
            this.setState({ activeItem: item, modal: !this.state.modal });
        }
      };

      editItem = item => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };

      submitHere = async item => {
        await handleSubmit(item, this.state.activeTab);
        let result = await refreshList();
        this.setState({requestList: result[0]&&result[0].data?result[0].data:[],
        clientList: result[1]&&result[1].data?result[1].data:[],
        productList: result[2]&&result[2].data?result[2].data:[]}, ()=>{
        this.setState({modal: false})
        })
      }

      deleteHere = async item => {
        await handleDelete(item, this.state.activeTab)
        let result = await refreshList()
        this.setState({requestList: result[0]&&result[0].data?result[0].data:[],
        clientList: result[1]&&result[1].data?result[1].data:[],
        productList: result[2]&&result[2].data?result[2].data:[]})
      }

      renderItems = (tab, itemList) => {
        return itemList.map(item => {
          let content
          if(tab==='1'){
            content = (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.client}</td>
                    <td>{item.client_priority}</td>
                    <td>{item.target_date}</td>
                    <td>{item.product_area}</td>
                  </tr>
              )
          }else{
            content = (
              <div>
              <span>
              {item.name}
              </span>

              </div>)
          }

          return (
            <span
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
             {content}
              <span>
                <button
                  onClick={() => this.editItem(item)}
                  className="btn btn-secondary mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => this.deleteHere(item)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </span>
            </span>
          )
        });
      };

      render() {
        let header = (
              <tr>
                <th>Feature</th>
                <th>Client</th>
                <th>Client Priority</th>
                <th>Taget Date</th>
                <th>Product Area</th>
              </tr>
        )
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">Request a Feature</h1>
            <Nav tabs>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === "1" })}
                 onClick={() => { this.handleToggle('1'); }}
               >
                 Feature Requests
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '2' })}
                 onClick={() => { this.handleToggle('2'); }}
               >
                 Clients
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '3' })}
                 onClick={() => { this.handleToggle('3'); }}
               >
               Product Area
               </NavLink>
             </NavItem>
           </Nav>

          {this.state.activeTab === "1" ? (
            <div className="row margin-Top">
              <div className="col-md-10 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <button onClick={this.createItem} className="btn btn-primary">
                      Add {this.state.context}
                    </button>
                  </div>
                  <br/>
                  <ul className="list-group list-group-flush">
                    <Table hover>
                      <thead>
                        {header}
                      </thead>
                      <tbody>
                      {this.state.requestList && this.state.requestList.length ?
                        this.state.requestList.map((item,i)=>{
                          return (
                          <tr>
                            <td>{item.title}</td>
                            <td>{item.client_name}</td>
                            <td>{item.client_priority}</td>
                            <td>{item.target_date}</td>
                            <td>{item.product_name}</td>
                            <span>
                              <button
                                onClick={() => this.editItem(item)}
                                className="btn btn-secondary mr-2"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => this.deleteHere(item)}
                                className="btn btn-danger"
                              >
                                Delete
                              </button>
                            </span>
                          </tr>
                        )
                      }) : "No Products" }
                      </tbody>
                    </Table>

                  </ul>
                </div>
              </div>
              {this.state.modal ? (
                <FeatureModal
                  clientList={this.state.clientList}
                  productList={this.state.productList}
                  activeItem={this.state.activeItem}
                  toggle={this.toggle}
                  onSave={this.submitHere}
                />
              ) : null}

          </div>

        ):
        <div>
        {this.state.activeTab === "2" ? (
          <div className="row margin-Top">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="">
                  <button onClick={this.createItem} className="btn btn-primary">
                    Add {this.state.context}
                  </button>
                </div>
                <br/>
                <ul className="list-group list-group-flush">
                  {this.renderItems(this.state.activeTab, this.state.clientList)}
                </ul>
              </div>
            </div>
            {this.state.modal ? (
              <ClientModal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.submitHere}
              />
            ) : null}

        </div>

      ):
      <div>
      {this.state.activeTab === "3" ? (
        <div className="row margin-Top">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add {this.state.context}
                </button>
              </div>
              <br/>
              <ul className="list-group list-group-flush">
                {this.renderItems(this.state.activeTab, this.state.productList)}
              </ul>
            </div>
          </div>
          {this.state.modal ? (
            <ProductModal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
              onSave={this.submitHere}
            />
          ) : null}

      </div>

    ): null
  }

  </div>
}

</div>
}


  </main>
        );
      }
    }
    export default App;
