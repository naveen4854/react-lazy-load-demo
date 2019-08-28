import React from "react";
import StockTable from "./StockTable";

// import StockChart from "./StockChart";

// const StockChart = React.lazy(() =>
//   import(/* webpackChunkName: 'StockChart' */ "./StockChart")
// );

const StockChartPromise = import("./StockChart");
const StockChart = React.lazy(() => StockChartPromise);

// function lazyWithPreload(factory) {
//   const Component = React.lazy(factory);
//   Component.preload = factory;
//   return Component;
// }
// const StockChart = lazyWithPreload(() => import("./StockChart"));

// class App extends React.Component {
//   state = {
//     selectedStock: null
//   };
//   render() {
//     const { stocks } = this.props;
//     const { selectedStock } = this.state;
//     return (
//       <React.Fragment>
//         <StockTable
//           stocks={stocks}
//           onSelect={selectedStock => this.setState({ selectedStock })}
//         />
//         {selectedStock && (
//           <StockChart
//             stock={selectedStock}
//             onClose={() => this.setState({ selectedStock: false })}
//           />
//         )}
//       </React.Fragment>
//     );
//   }
// }


class App extends React.Component {
  state = {
    selectedStock: null
  };
  handleYouMayNeedToRenderStockChartSoonEvent() {
    StockChart.preload();
  }
  render() {
    const { stocks } = this.props;
    const { selectedStock } = this.state;
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* <button onClick={this.handleYouMayNeedToRenderStockChartSoonEvent}>renderstock</button> */}
        <StockTable
          stocks={stocks}
          onSelect={selectedStock => this.setState({ selectedStock })}
        />
        {selectedStock && (
          <StockChart
            stock={selectedStock}
            onClose={() => this.setState({ selectedStock: false })}
          />
        )}
      </React.Suspense>
    );
  }
}

export default App;
