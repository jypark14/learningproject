


  const mapStateToProps = (state) => ({
    count: state.CounterReducer.count,
  });
  
//   const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators({counterIncrement, counterDecrement}, dispatch)
//   });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Learning_Project);
  
//   const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(
//       {
//         attemptLogin,
//         dismissLoginAlert,
//         dismissModal,
//         openExternalURL,
//       },
//       dispatch,
//     ),
//   });
  
  export default connect(mapStateToProps, mapDispatchToProps, undefined, {
    withRef: true,
  })(LoginScreen);
  