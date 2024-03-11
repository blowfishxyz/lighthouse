/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  GetDataEnumKind,
  GetDataEnumKindContent,
  combineCodec,
  getDataEnumDecoder,
  getDataEnumEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs';
import {
  ComparableOperator,
  ComparableOperatorArgs,
  EquatableOperator,
  EquatableOperatorArgs,
  getComparableOperatorDecoder,
  getComparableOperatorEncoder,
  getEquatableOperatorDecoder,
  getEquatableOperatorEncoder,
} from '.';

export type StakeAssertion =
  | {
      __kind: 'DelegationVoterPubkey';
      value: Address;
      operator: EquatableOperator;
    }
  | { __kind: 'DelegationStake'; value: bigint; operator: ComparableOperator }
  | {
      __kind: 'DelegationActivationEpoch';
      value: bigint;
      operator: ComparableOperator;
    }
  | {
      __kind: 'DelegationDeactivationEpoch';
      value: bigint;
      operator: ComparableOperator;
    }
  | { __kind: 'CreditsObserved'; value: bigint; operator: ComparableOperator };

export type StakeAssertionArgs =
  | {
      __kind: 'DelegationVoterPubkey';
      value: Address;
      operator: EquatableOperatorArgs;
    }
  | {
      __kind: 'DelegationStake';
      value: number | bigint;
      operator: ComparableOperatorArgs;
    }
  | {
      __kind: 'DelegationActivationEpoch';
      value: number | bigint;
      operator: ComparableOperatorArgs;
    }
  | {
      __kind: 'DelegationDeactivationEpoch';
      value: number | bigint;
      operator: ComparableOperatorArgs;
    }
  | {
      __kind: 'CreditsObserved';
      value: number | bigint;
      operator: ComparableOperatorArgs;
    };

export function getStakeAssertionEncoder(): Encoder<StakeAssertionArgs> {
  return getDataEnumEncoder([
    [
      'DelegationVoterPubkey',
      getStructEncoder([
        ['value', getAddressEncoder()],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    [
      'DelegationStake',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getComparableOperatorEncoder()],
      ]),
    ],
    [
      'DelegationActivationEpoch',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getComparableOperatorEncoder()],
      ]),
    ],
    [
      'DelegationDeactivationEpoch',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getComparableOperatorEncoder()],
      ]),
    ],
    [
      'CreditsObserved',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getComparableOperatorEncoder()],
      ]),
    ],
  ]);
}

export function getStakeAssertionDecoder(): Decoder<StakeAssertion> {
  return getDataEnumDecoder([
    [
      'DelegationVoterPubkey',
      getStructDecoder([
        ['value', getAddressDecoder()],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    [
      'DelegationStake',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getComparableOperatorDecoder()],
      ]),
    ],
    [
      'DelegationActivationEpoch',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getComparableOperatorDecoder()],
      ]),
    ],
    [
      'DelegationDeactivationEpoch',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getComparableOperatorDecoder()],
      ]),
    ],
    [
      'CreditsObserved',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getComparableOperatorDecoder()],
      ]),
    ],
  ]);
}

export function getStakeAssertionCodec(): Codec<
  StakeAssertionArgs,
  StakeAssertion
> {
  return combineCodec(getStakeAssertionEncoder(), getStakeAssertionDecoder());
}

// Data Enum Helpers.
export function stakeAssertion(
  kind: 'DelegationVoterPubkey',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'DelegationVoterPubkey'>
): GetDataEnumKind<StakeAssertionArgs, 'DelegationVoterPubkey'>;
export function stakeAssertion(
  kind: 'DelegationStake',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'DelegationStake'>
): GetDataEnumKind<StakeAssertionArgs, 'DelegationStake'>;
export function stakeAssertion(
  kind: 'DelegationActivationEpoch',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'DelegationActivationEpoch'>
): GetDataEnumKind<StakeAssertionArgs, 'DelegationActivationEpoch'>;
export function stakeAssertion(
  kind: 'DelegationDeactivationEpoch',
  data: GetDataEnumKindContent<
    StakeAssertionArgs,
    'DelegationDeactivationEpoch'
  >
): GetDataEnumKind<StakeAssertionArgs, 'DelegationDeactivationEpoch'>;
export function stakeAssertion(
  kind: 'CreditsObserved',
  data: GetDataEnumKindContent<StakeAssertionArgs, 'CreditsObserved'>
): GetDataEnumKind<StakeAssertionArgs, 'CreditsObserved'>;
export function stakeAssertion<K extends StakeAssertionArgs['__kind']>(
  kind: K,
  data?: any
): Extract<StakeAssertionArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isStakeAssertion<K extends StakeAssertion['__kind']>(
  kind: K,
  value: StakeAssertion
): value is StakeAssertion & { __kind: K } {
  return value.__kind === kind;
}