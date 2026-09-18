import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  handleTryAgain = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-[12px] border border-[#FECACA] bg-white p-8 text-center">
          <div className="text-4xl">⚠️</div>

          <h2 className="mt-3 text-lg font-semibold text-[#0F172A]">
            Something went wrong
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-[#64748B]">
            This section could not be displayed. The rest of the page
            is still working.
          </p>

          <details className="mx-auto mt-4 max-w-md text-left">
            <summary className="cursor-pointer text-sm font-medium text-[#64748B]">
              Show error details
            </summary>

            <pre className="mt-2 overflow-auto rounded-lg bg-[#F8FAFC] p-3 text-xs text-[#475569]">
              {this.state.error?.message}
            </pre>
          </details>

          <button
            type="button"
            onClick={this.handleTryAgain}
            className="mt-5 rounded-[8px] bg-[#0F766E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#115E59]"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}