// Copyright 2015, 2016 Ethcore (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

const initialState = {};

export default (state = initialState, action) => {
  if (action.type !== 'addCertification') {
    return state;
  }

  const { address, name, icon } = action;
  const certifications = state[address] || [];

  if (certifications.some((c) => c.name === name)) {
    return state;
  }
  const newCertifications = certifications.concat({ name, icon });

  return { ...state, [address]: newCertifications };
};
