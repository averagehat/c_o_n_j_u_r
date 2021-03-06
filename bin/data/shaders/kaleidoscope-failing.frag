//0-input

#pragma include "headerFrag.glsl"
// #ifdef GL_ES
// precision mediump float;
// #endif

// #define PI 3.1415926538979323846
// #define TWO_PI 2*PI

// uniform vec2 v_texcoord;
// uniform sampler2DRect u_tex0;
uniform sampler2DRect u_tex0;
uniform vec2 u_resolution;

IN vec2 texCoordVarying;
out vec4 outputColor;

uniform float u_time;
uniform float u_x0;
uniform float u_x1;
uniform float u_x2;
uniform float u_x3;

//uniform float kangleRad = 0.0;
//uniform vec2 u_resolution;

void main(){
    int ksectors = 1 + int(u_x0*20.0);
    vec2 screenCenter = vec2(0.5, 0.5) ;

    vec2 kcenter = screenCenter + vec2(u_x2, u_x3);
    // don't use time for ease debug float kangleRad = u_time*u_x1;
    float kangleRad = 1.*u_x1;
    float twoPi = 3.1415926538979323846 * 2.0;
    vec2 pos = texCoordVarying;
    vec2 v = pos.xy - screenCenter;
    float r = length(v);
    float a = atan (v.y, v.x);
    
    float A = twoPi / float(ksectors);
    a = mod(a, A);
    if (a > A/2.0 ){ a = A - a; }
    a -= kangleRad;

    vec2 u =vec2( cos(a), sin(a) ) * r;
    u += kcenter;
//     FRAG_COLOR = vec4(0., 1., 0., 1.);
     FRAG_COLOR = TEXTURE(u_tex0, u);
     //FRAG_COLOR = vec4(0.1, 1., 0., 1.); // TEXTURE(u_tex0, pos);
    outputColor = FRAG_COLOR;
     // gl_FragColor = FRAG_COLOR;
}



