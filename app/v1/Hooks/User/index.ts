import {
  IBeforeDeleteContext,
  IBeforeDeleteQueryContext,
  IBeforeInsertContext,
  IBeforePaginateContext,
  IBeforeShowContext,
  IBeforeUpdateContext,
  IBeforeUpdateQueryContext,
} from "axe-api";
import bcrypt from "bcrypt";

export const onBeforeInsert = async ({ formData }: IBeforeInsertContext) => {
  formData.password = bcrypt.hashSync(formData.password, 10);
};

export const onBeforeUpdateQuery = async ({}: IBeforeUpdateQueryContext) => {};

export const onBeforeUpdate = async ({}: IBeforeUpdateContext) => {};

export const onBeforeDeleteQuery = async ({}: IBeforeDeleteQueryContext) => {};

export const onBeforeDelete = async ({}: IBeforeDeleteContext) => {};

export const onBeforePaginate = async ({}: IBeforePaginateContext) => {};

export const onBeforeShow = async ({}: IBeforeShowContext) => {};
