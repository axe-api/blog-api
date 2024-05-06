import {
  IBeforeDeleteContext,
  IBeforeDeleteQueryContext,
  IBeforeInsertContext,
  IBeforePaginateContext,
  IBeforeShowContext,
  IBeforeUpdateContext,
  IBeforeUpdateQueryContext,
} from "axe-api";

export const onBeforeInsert = async ({
  formData,
  req,
}: IBeforeInsertContext) => {
  formData.author_id = req.original.auth.userId;
};

export const onBeforeUpdateQuery = async ({}: IBeforeUpdateQueryContext) => {};

export const onBeforeUpdate = async ({}: IBeforeUpdateContext) => {};

export const onBeforeDeleteQuery = async ({}: IBeforeDeleteQueryContext) => {};

export const onBeforeDelete = async ({}: IBeforeDeleteContext) => {};

export const onBeforePaginate = async ({}: IBeforePaginateContext) => {};

export const onBeforeShow = async ({}: IBeforeShowContext) => {};
