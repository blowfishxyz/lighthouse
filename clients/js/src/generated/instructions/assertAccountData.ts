/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  Context,
  Pda,
  PublicKey,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  CompactU64,
  CompactU64Args,
  getCompactU64Serializer,
} from '../../hooked';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  DataValueAssertion,
  DataValueAssertionArgs,
  LogLevel,
  LogLevelArgs,
  getDataValueAssertionSerializer,
  getLogLevelSerializer,
} from '../types';

// Accounts.
export type AssertAccountDataInstructionAccounts = {
  /** Target account to be asserted */
  targetAccount: PublicKey | Pda;
};

// Data.
export type AssertAccountDataInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  offset: CompactU64;
  assertion: DataValueAssertion;
};

export type AssertAccountDataInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  offset: CompactU64Args;
  assertion: DataValueAssertionArgs;
};

export function getAssertAccountDataInstructionDataSerializer(): Serializer<
  AssertAccountDataInstructionDataArgs,
  AssertAccountDataInstructionData
> {
  return mapSerializer<
    AssertAccountDataInstructionDataArgs,
    any,
    AssertAccountDataInstructionData
  >(
    struct<AssertAccountDataInstructionData>(
      [
        ['discriminator', u8()],
        ['logLevel', getLogLevelSerializer()],
        ['offset', getCompactU64Serializer()],
        ['assertion', getDataValueAssertionSerializer()],
      ],
      { description: 'AssertAccountDataInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 2,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  ) as Serializer<
    AssertAccountDataInstructionDataArgs,
    AssertAccountDataInstructionData
  >;
}

// Args.
export type AssertAccountDataInstructionArgs =
  AssertAccountDataInstructionDataArgs;

// Instruction.
export function assertAccountData(
  context: Pick<Context, 'programs'>,
  input: AssertAccountDataInstructionAccounts & AssertAccountDataInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'lighthouse',
    'L2TExMFKdjpN9kozasaurPirfHy9P8sbXoAN1qA3S95'
  );

  // Accounts.
  const resolvedAccounts = {
    targetAccount: {
      index: 0,
      isWritable: false as boolean,
      value: input.targetAccount ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: AssertAccountDataInstructionArgs = { ...input };

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getAssertAccountDataInstructionDataSerializer().serialize(
    resolvedArgs as AssertAccountDataInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
