import { FormattedDate, FormattedNumber, FormattedTime } from 'react-intl';
import React from 'react';

function formatIntl(value, currency) {
  return currency ? (
    <FormattedNumber
      value={value}
      style={'currency'}
      currency={currency}
      currencyDisplay={'symbol'}
      minimumFractionDigits={2}
      maximumFractionDigits={2}
    />
  ) : (
    <FormattedNumber value={value} style={'decimal'} minimumFractionDigits={2} maximumFractionDigits={2} />
  );
}

function formatVolume(value) {
  return <FormattedNumber value={value} style={'decimal'} minimumFractionDigits={0} maximumFractionDigits={0} />;
}

function formatTime(value) {
  return <FormattedTime value={new Date(value)} hour="2-digit" minute="2-digit" />;
}

function formatDate(value) {
  return <FormattedDate value={new Date(value)} />;
}

export { formatIntl, formatTime, formatDate, formatVolume };
