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
  formData.owner_id = req.original.auth.userId;
};

export const onBeforeUpdateQuery = async ({}: IBeforeUpdateQueryContext) => {};

export const onBeforeUpdate = async ({}: IBeforeUpdateContext) => {};

export const onBeforeDeleteQuery = async ({}: IBeforeDeleteQueryContext) => {};

export const onBeforeDelete = async ({}: IBeforeDeleteContext) => {};

export const onBeforePaginate = async ({
  req,
  query,
}: IBeforePaginateContext) => {
  query.where("owner_id", req.original.auth.userId);
};

export const onBeforeShow = async ({}: IBeforeShowContext) => {};
