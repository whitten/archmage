//
// Copyright © 2020-2021  Egidijus Lileika
//
// This file is part of Archmage - Fantasy Virtual Machine
//
// Archmage is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Archmage is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Archmage. If not, see <https://www.gnu.org/licenses/>.
//

#version 330 core

in vec2 frag_texture_coords;

out vec4 color;

uniform sampler2D texture_sampler;

void main(void) {
    color = texture(texture_sampler, frag_texture_coords);
}