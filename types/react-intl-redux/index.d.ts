// Type definitions for react-intl-redux v0.1.0
// Project: https://github.com/ratson/react-intl-redux
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { IntlProvider as ReactIntlProvider } from "react-intl";
import { Provider as ReduxProvider } from "react-redux";
import { Action, AnyAction } from "redux";

interface IntlState {
    locale: string;
    messages: any;
    formats?: any;
}

interface IntlAction extends Action {
    payload?: IntlState | undefined;
}

export function intlReducer(state: IntlState | undefined, action: IntlAction): IntlState;
export function updateIntl(opts: IntlState): IntlAction;
export class IntlProvider extends ReactIntlProvider {}
export class Provider<A extends Action = AnyAction> extends ReduxProvider<A> {}
