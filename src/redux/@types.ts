import { ThunkDispatch, AnyAction, Middleware } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { IAuthStore } from "./auth/@types";

export type RootState = {
    'auth': IAuthStore;
};

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction> & Dispatch<AnyAction>;
export type AppMiddleware = Middleware<{}, RootState, AppDispatch>;