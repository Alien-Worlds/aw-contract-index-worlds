/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:09 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { MongoConfig, MongoSource } from '@alien-worlds/storage-mongodb';

import { IndexWorldsActionMongoMapper } from './actions/data/mappers';
import { IndexWorldsActionMongoSource } from './actions/data/data-sources';
import { IndexWorldsActionRepository } from './actions/domain/repositories';
import { IndexWorldsContractService } from "./services/index-worlds-contract.service";
import { IndexWorldsContractServiceImpl } from "./services/index-worlds-contract.service-impl";
import { IndexWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { IndexWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { IndexWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

export const setupIndexWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<IndexWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }
  const repository = new RepositoryImpl(
    new IndexWorldsActionMongoSource(mongoSource),
    new IndexWorldsActionMongoMapper(),
    null
  );

  if (container) {
    container
      .bind<IndexWorldsActionRepository>(IndexWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupIndexWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<IndexWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }
  const repository = new RepositoryImpl(
    new IndexWorldsDeltaMongoSource(mongoSource),
    new IndexWorldsDeltaMongoMapper(),
    null
  );

  if (container) {
    container
      .bind<IndexWorldsDeltaRepository>(IndexWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupIndexWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): IndexWorldsContractService => {
  const service = new IndexWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<IndexWorldsContractService>(IndexWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
