// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Table,
//   Button,
//   Container,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   FormGroup,
//   ModalFooter,
// } from "reactstrap";

// const data = [
//   { id: 1, user: "agus", password: "123", tipo: 1 },
//   { id: 2, password: "123", user: "yaco" , tipo: 2},
//   { id: 3, password: "456", user: "franco", tipo: 1 }
// ];

// class User extends React.Component {
//   state = {
//     data: data,
//     modalActualizar: false,
//     modalInsertar: false,
//     form: {
//       id: "",
//       titulo: "",
//       cuerpo: "",
//       tipo:""
//     },
//   };

//   mostrarModalActualizar = (dato) => {
//     this.setState({
//       form: dato,
//       modalActualizar: true,
//     });
//   };

//   cerrarModalActualizar = () => {
//     this.setState({ modalActualizar: false });
//   };

//   mostrarModalInsertar = () => {
//     this.setState({
//       modalInsertar: true,
//     });
//   };

//   cerrarModalInsertar = () => {
//     this.setState({ modalInsertar: false });
//   };

//   editar = (dato) => {
//     var contador = 0;
//     var arreglo = this.state.data;
//     arreglo.map((registro) => {
//       if (dato.id == registro.id) {
//         arreglo[contador].user = dato.user;
//         arreglo[contador].password = dato.password;
//         arreglo[contador].tipo = dato.tipo;
//       }
//       contador++;
//     });
//     this.setState({ data: arreglo, modalActualizar: false });
//   };

//   eliminar = (dato) => {
//     var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
//     if (opcion == true) {
//       var contador = 0;
//       var arreglo = this.state.data;
//       arreglo.map((registro) => {
//         if (dato.id == registro.id) {
//           arreglo.splice(contador, 1);
//         }
//         contador++;
//       });
//       this.setState({ data: arreglo, modalActualizar: false });
//     }
//   };

//   insertar= ()=>{
//     var valorNuevo= {...this.state.form};
//     valorNuevo.id=this.state.data.length+1;
//     var lista= this.state.data;
//     lista.push(valorNuevo);
//     this.setState({ modalInsertar: false, data: lista });
//   }

//   handleChange = (e) => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   render() {
    
//     return (
//       <>
//         <Container>
//           <h1 class="display-4 fw-normal text-center" >NOTA NOTERA</h1>
//         <br />
//           <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
//           <br />
//           <br />
//           <Table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>User</th>
//                 <th>Password</th>
//                 <th>Tipo</th>
//                 <th>Acción</th>
//               </tr>
//             </thead>

//             <tbody>
//               {this.state.data.map((dato) => (
//                 <tr key={dato.id}>
//                   <td>{dato.id}</td>
//                   <td>{dato.user}</td>
//                   <td>{dato.password}</td>
//                   <td>{dato.tipo}</td>
//                   <td>
//                     <Button
//                       color="primary"
//                       onClick={() => this.mostrarModalActualizar(dato)}
//                     >
//                       Editar
//                     </Button>{" "}
//                     <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Container>

//         <Modal isOpen={this.state.modalActualizar}>
//           <ModalHeader>
//            <div><h3>Editar usuario</h3></div>
//           </ModalHeader>

//           <ModalBody>
//             <FormGroup>
//               <label>
//                Id:
//               </label>
            
//               <input
//                 className="form-control"
//                 readOnly
//                 type="text"
//                 value={this.state.form.id}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 User: 
//               </label>
//               <input
//                 className="form-control"
//                 name="user"
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.form.user}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 Password: 
//               </label>
//               <input
//                 className="form-control"
//                 name="password"
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.form.password}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>
//                 Tipo: 
//               </label>
//               <input
//                 className="form-control"
//                 name="tipo"
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.form.tipo}
//               />
//             </FormGroup>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               color="primary"
//               onClick={() => this.editar(this.state.form)}
//             >
//               Editar
//             </Button>
//             <Button
//               color="danger"
//               onClick={() => this.cerrarModalActualizar()}
//             >
//               Cancelar
//             </Button>
//           </ModalFooter>
//         </Modal>



//         <Modal isOpen={this.state.modalInsertar}>
//           <ModalHeader>
//            <div><h3>Insertar Nota</h3></div>
//           </ModalHeader>

//           <ModalBody>
//             <FormGroup>
//               <label>
//                 Id: 
//               </label>
              
//               <input
//                 className="form-control"
//                 readOnly
//                 type="text"
//                 value={this.state.data.length+1}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 user: 
//               </label>
//               <input
//                 className="form-control"
//                 name="user"
//                 type="text"
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
            
//             <FormGroup>
//               <label>
//                 Password: 
//               </label>
//               <input
//                 className="form-control"
//                 name="password"
//                 type="text"
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               color="primary"
//               onClick={() => this.insertar()}
//             >
//               Insertar
//             </Button>
//             <Button
//               className="btn btn-danger"
//               onClick={() => this.cerrarModalInsertar()}
//             >
//               Cancelar
//             </Button>
//           </ModalFooter>
//         </Modal>  
      
//       </>
//     );
//   }
// }
// export default User;