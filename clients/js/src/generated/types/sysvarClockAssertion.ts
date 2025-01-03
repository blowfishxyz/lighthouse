/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  i64,
  struct,
  u64,
} from '@metaplex-foundation/umi/serializers';
import {
  IntegerOperator,
  IntegerOperatorArgs,
  getIntegerOperatorSerializer,
} from '.';

export type SysvarClockAssertion =
  | { __kind: 'Slot'; value: bigint; operator: IntegerOperator }
  | { __kind: 'EpochStartTimestamp'; value: bigint; operator: IntegerOperator }
  | { __kind: 'Epoch'; value: bigint; operator: IntegerOperator }
  | { __kind: 'LeaderScheduleEpoch'; value: bigint; operator: IntegerOperator }
  | { __kind: 'UnixTimestamp'; value: bigint; operator: IntegerOperator };

export type SysvarClockAssertionArgs =
  | { __kind: 'Slot'; value: number | bigint; operator: IntegerOperatorArgs }
  | {
      __kind: 'EpochStartTimestamp';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | { __kind: 'Epoch'; value: number | bigint; operator: IntegerOperatorArgs }
  | {
      __kind: 'LeaderScheduleEpoch';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | {
      __kind: 'UnixTimestamp';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    };

export function getSysvarClockAssertionSerializer(): Serializer<
  SysvarClockAssertionArgs,
  SysvarClockAssertion
> {
  return dataEnum<SysvarClockAssertion>(
    [
      [
        'Slot',
        struct<GetDataEnumKindContent<SysvarClockAssertion, 'Slot'>>([
          ['value', u64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'EpochStartTimestamp',
        struct<
          GetDataEnumKindContent<SysvarClockAssertion, 'EpochStartTimestamp'>
        >([
          ['value', i64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'Epoch',
        struct<GetDataEnumKindContent<SysvarClockAssertion, 'Epoch'>>([
          ['value', u64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'LeaderScheduleEpoch',
        struct<
          GetDataEnumKindContent<SysvarClockAssertion, 'LeaderScheduleEpoch'>
        >([
          ['value', u64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'UnixTimestamp',
        struct<GetDataEnumKindContent<SysvarClockAssertion, 'UnixTimestamp'>>([
          ['value', i64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
    ],
    { description: 'SysvarClockAssertion' }
  ) as Serializer<SysvarClockAssertionArgs, SysvarClockAssertion>;
}

// Data Enum Helpers.
export function sysvarClockAssertion(
  kind: 'Slot',
  data: GetDataEnumKindContent<SysvarClockAssertionArgs, 'Slot'>
): GetDataEnumKind<SysvarClockAssertionArgs, 'Slot'>;
export function sysvarClockAssertion(
  kind: 'EpochStartTimestamp',
  data: GetDataEnumKindContent<SysvarClockAssertionArgs, 'EpochStartTimestamp'>
): GetDataEnumKind<SysvarClockAssertionArgs, 'EpochStartTimestamp'>;
export function sysvarClockAssertion(
  kind: 'Epoch',
  data: GetDataEnumKindContent<SysvarClockAssertionArgs, 'Epoch'>
): GetDataEnumKind<SysvarClockAssertionArgs, 'Epoch'>;
export function sysvarClockAssertion(
  kind: 'LeaderScheduleEpoch',
  data: GetDataEnumKindContent<SysvarClockAssertionArgs, 'LeaderScheduleEpoch'>
): GetDataEnumKind<SysvarClockAssertionArgs, 'LeaderScheduleEpoch'>;
export function sysvarClockAssertion(
  kind: 'UnixTimestamp',
  data: GetDataEnumKindContent<SysvarClockAssertionArgs, 'UnixTimestamp'>
): GetDataEnumKind<SysvarClockAssertionArgs, 'UnixTimestamp'>;
export function sysvarClockAssertion<
  K extends SysvarClockAssertionArgs['__kind'],
>(kind: K, data?: any): Extract<SysvarClockAssertionArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isSysvarClockAssertion<
  K extends SysvarClockAssertion['__kind'],
>(
  kind: K,
  value: SysvarClockAssertion
): value is SysvarClockAssertion & { __kind: K } {
  return value.__kind === kind;
}
