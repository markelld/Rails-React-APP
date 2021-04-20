import Header from "../Header/Header";

const Layout = (props) => {
  const { currentUser, handleLogout } = props; 

  return (
    <div className="layout">
      <Header
        currentUser={currentUser} 
        handleLogout={handleLogout}
      /> 
      <div>
        {props.children}
      </div>
    </div>
  )
} 

export default Layout;