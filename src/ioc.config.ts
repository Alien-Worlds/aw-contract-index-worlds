/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/aw-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/aw-storage-mongodb';

import { IndexWorldsActionMongoMapper } from './actions/data/mappers';
import { IndexWorldsActionMongoSource } from './actions/data/data-sources';
import { IndexWorldsActionRepository } from './actions/domain/repositories';
import { IndexWorldsContractService } from "./services/index-worlds-contract.service";
import { IndexWorldsContractServiceImpl } from "./services/index-worlds-contract.service-impl";
import { IndexWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { IndexWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { IndexWorldsDeltaRepository } from './deltas/domain/repositories';
import { AntelopeRpcSourceImpl } from '@alien-worlds/aw-antelope';

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

  const mapper = new IndexWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new IndexWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
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

  const mapper = new IndexWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new IndexWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<IndexWorldsDeltaRepository>(IndexWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupIndexWorldsContractService = (
  antelopeRpcSourceImpl: AntelopeRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): IndexWorldsContractService => {
  const service = new IndexWorldsContractServiceImpl(
    antelopeRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<IndexWorldsContractService>(IndexWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
